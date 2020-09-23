#include "vntlib.h"
#include "diceData.h"



KEY uint256 freeAmount = U256(100000000000000000000); // 100*10**18;

EVENT EVENT_BET(indexed address from, string nickname, uint256 amount,
                int32 bigger, uint64 lottery, uint256 reward);
// EVENT EVENT_WITHDRAW(indexed address from, string nickname, uint256 amount);
// EVENT EVENT_DEPOSIT(indexed address from, string nickname, uint256 amount);
// EVENT EVENT_NICKNAME(indexed address from, string nickName);
EVENT EVENT_GETFREEVNT(indexed address from, bool got);



uint64 random()
{
  uint64 time = GetTimestamp();
  PrintUint64T("get time", time);
  string time_sha3 = SHA3(SHA3(SHA3(FromU64(time))));
  PrintStr("get time sha3", time_sha3);
  uint64 index = time % 63 + 2;
  PrintStr("get index", index);
  uint64 gas = GetGas() % 64 + 2;
  PrintStr("get gas", gas);
  uint64 random_a = (uint64)time_sha3[index];
  PrintUint64T("get random_a", random_a);
  uint64 random_b = (uint64)time_sha3[index + 1];
  PrintUint64T("get random_b", random_b);
  uint64 random_c = random_a * random_b * gas % 101;
  PrintUint64T("get result", random_c);
  return random_c;
}

UNMUTABLE
uint64 testRandom() { return random(); }

//-1:<50,0:=50,1:>50
MUTABLE
void Bet(uint256 amount, int32 bigger)
{
  PrintUint256T("get amount:", amount);
  checkAmount(amount);
  checkPool(amount);
  address sender = GetSender();
  uint64 res = random();
  // increase totalGameCount

  uint64 totalGameCount = getTotalGameCount();
  totalGameCount += 1;
  SetTotalGameCount(totalGameCount);

  if (res > 50 && bigger == 1)
  {
    // you win
    uint256 reward = getReward(amount);
    setReward(sender, reward);
    string _nickName = GetNickName();
    EVENT_BET(sender, _nickName, amount, bigger, res, reward);
  }

  else if (res < 50 && bigger == -1)
  {
    // you win
    uint256 reward = getReward(amount);
    setReward(sender, reward);
    string _nickName = GetNickName();
    EVENT_BET(sender, _nickName, amount, bigger, res, reward);
  }
  else if (res == 50 && bigger == 0)
  {
    // you are the luckist man
    uint256 reward = getReward(amount);
    reward = U256SafeMul(reward, U256(100));
    setReward(sender, reward);
    string _nickName = GetNickName();
    EVENT_BET(sender, _nickName, amount, bigger, res, reward);
  }
  else
  {
    // you lose
    // accounts.key = sender;
    // accounts.value.balance = U256SafeSub(accounts.value.balance, amount);
    // accounts.value.loseAmount = U256SafeAdd(accounts.value.loseAmount, amount);
    // deposit = U256SafeSub(deposit, amount);
    // accounts.value.loseCount += 1;
    setLost(sender, amount);
    string _nickName = GetNickName();
    EVENT_BET(sender, _nickName, amount, bigger, res, U256(0));
  }
}


//Withdrawall
MUTABLE
void WithdrawAll()
{
  address _sender = GetSender();
  uint256 amount = GetBalanceFromAddress(_sender);
  Withdraw(_sender, amount);
}



//WithdrawPool all amount
MUTABLE
void WithdrawPoolAll()
{
  uint256 amount = GetBalanceFromAddress(GetContractAddress());
  WithdrawPool(amount);
}

//Expand the prize pool - not implement here
MUTABLE
void $DepositPool() {}


//  Get 100VNT chips for free, each account can get one time
MUTABLE
void GetFreeChips()
{
  address from = GetSender();
  // accounts.key = from;
  bool flag = getFreeAddressOf(from);
  Require(flag == false, "you have got before");
  addBalanceOf(from, freeAmount);
  // accounts.value.balance = U256SafeAdd(accounts.value.balance, freeAmount);
  addDeposit(from, freeAmount);
  // deposit = U256SafeAdd(deposit, freeAmount);
  setFreeAddressOf(from);
  // accounts.value.freeAddress = true;
  EVENT_GETFREEVNT(from, true);
}



UNMUTABLE
string GetWinAndLose()
{
  address from = GetSender();
  uint64 win = getWinCountOf(from);
  uint64 lose = getLoseCountOf(from);
  uint64 chicken = getChikenCountOf(from);
  return Concat(
      Concat(Concat(Concat(FromU64(win), "-"), FromU64(chicken)), "-"),
      FromU64(lose));
}

