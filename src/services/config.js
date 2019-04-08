

var Config = {
    contractAddress: '0x143f5e185e5724a1794739d37245b5b790d9e981',
    providerUrl: 'http://192.168.9.74:8880',
    abi :
        `[{"name":"$Dice","constant":false,"inputs":[],"outputs":[],"type":"constructor"},{"name":"Withdraw","constant":false,"inputs":[{"name":"amount","type":"uint256","indexed":false}],"outputs":[],"type":"function"},{"name":"WithdrawPool","constant":false,"inputs":[{"name":"amount","type":"uint256","indexed":false}],"outputs":[],"type":"function"},{"name":"WithdrawPoolAll","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"SetNickName","constant":false,"inputs":[{"name":"name","type":"string","indexed":false}],"outputs":[],"type":"function"},{"name":"GetWinAndLose","constant":true,"inputs":[],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"GetTotalGameCount","constant":true,"inputs":[],"outputs":[{"name":"output","type":"uint64","indexed":false}],"type":"function"},{"name":"$Deposit","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"Bet","constant":false,"inputs":[{"name":"amount","type":"uint256","indexed":false},{"name":"bigger","type":"int32","indexed":false}],"outputs":[],"type":"function"},{"name":"WithdrawAll","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"GetNickName","constant":true,"inputs":[],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"GetOwner","constant":true,"inputs":[],"outputs":[{"name":"output","type":"address","indexed":false}],"type":"function"},{"name":"testRandom","constant":true,"inputs":[],"outputs":[{"name":"output","type":"uint64","indexed":false}],"type":"function"},{"name":"$DepositPool","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"GetFreeChips","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"GetNickNameFromAddress","constant":true,"inputs":[{"name":"addr","type":"address","indexed":false}],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"GetAmountFromAddress","constant":true,"inputs":[{"name":"addr","type":"address","indexed":false}],"outputs":[{"name":"output","type":"uint256","indexed":false}],"type":"function"},{"name":"GetAmount","constant":true,"inputs":[],"outputs":[{"name":"output","type":"uint256","indexed":false}],"type":"function"},{"name":"GetPool","constant":true,"inputs":[],"outputs":[{"name":"output","type":"uint256","indexed":false}],"type":"function"},{"name":"EVENT_BET","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"nickname","type":"string","indexed":false},{"name":"amount","type":"uint256","indexed":false},{"name":"bigger","type":"int32","indexed":false},{"name":"lottery","type":"uint64","indexed":false},{"name":"reward","type":"uint256","indexed":false}],"type":"event"},{"name":"EVENT_WITHDRAW","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"nickname","type":"string","indexed":false},{"name":"amount","type":"uint256","indexed":false}],"type":"event"},{"name":"EVENT_DEPOSIT","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"nickname","type":"string","indexed":false},{"name":"amount","type":"uint256","indexed":false}],"type":"event"},{"name":"EVENT_NICKNAME","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"nickName","type":"string","indexed":false}],"type":"event"},{"name":"EVENT_GETFREEVNT","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"got","type":"bool","indexed":false}],"type":"event"},{"name":"EVNRT_TEST","anonymous":false,"inputs":[{"name":"bigger","type":"int32","indexed":false}],"type":"event"}]`,
}
export default Config;

