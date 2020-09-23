How to join the VNT Hubble testnet
Contents of this article:

Basic information of testnet
Join the testnet
Testnet faucet
other information
Testnet code update
Download go-vnt code, switch to v0.6.4-alpha.6, compile gvnt, install gvnt

Basic information of testnet
The VNT Hubble test network has deployed a total of 7 witness nodes, responsible for executing transactions and packaging blocks, deployed 3 public full nodes, and opened the RPC service, which can be used when querying and sending transactions.

7 initial witness P2P addresses:
"/ip4/192.168.9.106/tcp/3002/ipfs/1kHQpRW4VZbDPx3HTBKFHotHekoHRzncQiosfT8roc5nsSR",
"/ip4/192.168.9.113/tcp/3002/ipfs/1kHP5ZqyCSYieopq1BkJMYvTvvJNwUXuDCLMRq3qVRG1hwJ",
"/ip4/192.168.9.107/tcp/3002/ipfs/1kHBc6rBtQh4Y4YPh4daLS8LYALsWQ6G8aKf633R2EhzBQc",
"/ip4/192.168.9.114/tcp/3002/ipfs/1kHjPSvoBZzA51Dv8DeZVgqjhMeDZWuwNkQirXsQeeBKzTc",
"/ip4/192.168.9.124/tcp/3002/ipfs/1kHktVU6Qg5RgagNN4vzzCnr6LMrjsTh5CtrCbmztqc2Rrt",
"/ip4/192.168.9.112/tcp/3002/ipfs/1kHLejtggY19L1Qa9MVZ1gnsRNNqqTprAiKQYqK4wBy74nK",
"/ip4/192.168.9.136/tcp/3002/ipfs/1kHDzrP344t2NmAK8cmCChJm6aL4URSibn6Tbdg1VkMY1mR"


The P2P address of a public boot node:
"/ip4/101.37.164.86/tcp/3002/ipfs/1kHkLvCyGX5R33XNr7vmboyYe3etLDs1s9t8odPBZyBwNyB"


The RPC information of 3 public full nodes is:
http://101.37.164.86:8880
http://47.111.100.232:8880



Join the testnet
In addition to using public nodes, a better choice for developers is to deploy private full nodes, which can be deployed in the local area network and public network environments, but the RPC information is not disclosed to the outside world, achieving the purpose of independent use .


cd ~
mkdir vntnode
cd vntnode

Step 3: Use the init.json file to initialize the node, the testnet init.json content is as follows:
{
    "config": {
        "chainId": 2,
        "dpos": {
            "period": 2,
            "witnessesnum": 7,
            "witnessesUrl": [
                "/ip4/192.168.9.106/tcp/3002/ipfs/1kHQpRW4VZbDPx3HTBKFHotHekoHRzncQiosfT8roc5nsSR",
                "/ip4/192.168.9.113/tcp/3002/ipfs/1kHP5ZqyCSYieopq1BkJMYvTvvJNwUXuDCLMRq3qVRG1hwJ",
                "/ip4/192.168.9.107/tcp/3002/ipfs/1kHBc6rBtQh4Y4YPh4daLS8LYALsWQ6G8aKf633R2EhzBQc",
                "/ip4/192.168.9.114/tcp/3002/ipfs/1kHjPSvoBZzA51Dv8DeZVgqjhMeDZWuwNkQirXsQeeBKzTc",
                "/ip4/192.168.9.124/tcp/3002/ipfs/1kHktVU6Qg5RgagNN4vzzCnr6LMrjsTh5CtrCbmztqc2Rrt",
                "/ip4/192.168.9.112/tcp/3002/ipfs/1kHLejtggY19L1Qa9MVZ1gnsRNNqqTprAiKQYqK4wBy74nK",
                "/ip4/192.168.9.136/tcp/3002/ipfs/1kHDzrP344t2NmAK8cmCChJm6aL4URSibn6Tbdg1VkMY1mR"
            ]
        }
    },
    "timestamp": "0x5b45b949",
    "extraData": "0x",
    "gasLimit": "0x47b760",
    "difficulty": "0x1",
    "coinbase": "0x0000000000000000000000000000000000000000",
    "alloc": {
        "0x02f8d9c9bb81b3a81bf13d4ec8818be5918d3658": {
          "balance": "0x6765c793fa10079d0000000"
        },
        "0xa0959738e3555c54577cca3c721b674c5c18072e": {
            "balance": "0x6765c793fa10079d0000000"
        },
        "0xf3e3b67550a6f37f596a1ba2e7357e946c82c905": {
            "balance": "0x6765c793fa10079d0000000"
        },
        "0x838c5c23372ccd88fc5fc4943e2eda5f3a0ec35e": {
            "balance": "0x6765c793fa10079d0000000"
        },
        "0xb1613aa21681b380df782ed0a0a83b5d26894918": {
            "balance": "0x9b18ab5df7180b6b8000000"
        }
        
    },
    "witnesses": [
       "0xb300a4b899e57263cdc6aa851995bf33366e862c",
       "0x88cbe08dd0a90d85102976f810b56dfed8728f55",
       "0x99e8263ceffea1b1e5b136a3a133f5064501e45d",
       "0x2d39a693b2d65fa709b54a6d72f82623feaf71b9",
       "0x41c7bba7c90783e69f09d63c9986d7bc9424c144",
       "0xe840a1d3c904392d421fc5b460ef09b547de5c4e",
       "0x800cf4b8b3d8f549299d291fb66497ce6653c2ca"
    ],
    "number": "0x0",
    "gasUsed": "0x0",
    "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000"

}


{
    "config": {
        "chainId": 2,
        "dpos": {
            "period": 2,
            "witnessesnum": 7,
            "witnessesUrl": [
                "/ip4/192.168.9.106/tcp/3002/ipfs/1kHQpRW4VZbDPx3HTBKFHotHekoHRzncQiosfT8roc5nsSR",
                "/ip4/192.168.9.113/tcp/3002/ipfs/1kHP5ZqyCSYieopq1BkJMYvTvvJNwUXuDCLMRq3qVRG1hwJ",
                "/ip4/192.168.9.107/tcp/3002/ipfs/1kHBc6rBtQh4Y4YPh4daLS8LYALsWQ6G8aKf633R2EhzBQc",
                "/ip4/192.168.9.114/tcp/3002/ipfs/1kHjPSvoBZzA51Dv8DeZVgqjhMeDZWuwNkQirXsQeeBKzTc",
                "/ip4/192.168.9.124/tcp/3002/ipfs/1kHktVU6Qg5RgagNN4vzzCnr6LMrjsTh5CtrCbmztqc2Rrt",
                "/ip4/192.168.9.112/tcp/3002/ipfs/1kHLejtggY19L1Qa9MVZ1gnsRNNqqTprAiKQYqK4wBy74nK",
                "/ip4/192.168.9.136/tcp/3002/ipfs/1kHDzrP344t2NmAK8cmCChJm6aL4URSibn6Tbdg1VkMY1mR"
            ]
        }
    },
    "timestamp": "0x5b45b949",
    "extraData": "0x",
    "gasLimit": "0x47b760",
    "difficulty": "0x1",
    "coinbase": "0x0000000000000000000000000000000000000000",
    "alloc": {
        "0x02f8d9c9bb81b3a81bf13d4ec8818be5918d3658": {
            "balance": "0x9b18ab5df7180b6b8000000"
        },
        "0xa0959738e3555c54577cca3c721b674c5c18072e": {
            "balance": "0x6765c793fa10079d0000000"
        },
        "0xf3e3b67550a6f37f596a1ba2e7357e946c82c905": {
            "balance": "0x6765c793fa10079d0000000"
        },
        "0x838c5c23372ccd88fc5fc4943e2eda5f3a0ec35e": {
            "balance": "0x6765c793fa10079d0000000"
        }
    },
    "witnesses": [
       "0xb300a4b899e57263cdc6aa851995bf33366e862c",
       "0x88cbe08dd0a90d85102976f810b56dfed8728f55",
       "0x99e8263ceffea1b1e5b136a3a133f5064501e45d",
       "0x2d39a693b2d65fa709b54a6d72f82623feaf71b9",
       "0x41c7bba7c90783e69f09d63c9986d7bc9424c144",
       "0xe840a1d3c904392d421fc5b460ef09b547de5c4e",
       "0x800cf4b8b3d8f549299d291fb66497ce6653c2ca"
    ],
    "number": "0x0",
    "gasUsed": "0x0",
    "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000"

}


Create an init.json file and write the above content. Then use init.json to initialize:


gvnt init init.json --datadir .


Step 4: Create a gvnt account, you can set a password:
gvnt account new .

If you already have an account, you can directly copy the account keystore file to the vntnode/keystore directory.

Step 5: Use the p2p address of the public full node as the bootnode to start the private node:
gvnt --networkid 2 --datadir . --port 3009 --vntbootnode "/ip4/47.104.173.117/tcp/3002/ipfs/1kHJ81wSKMyNyVLQJ9Gn7KRyT7cV1LSAC7dqYneiLMuVadE" --syncmode full --rpc --rpcaddr 0.0.0.0 --rpcport 8880 --rpcapi="db,core,net,vnt,personal" console

gvnt --networkid 2 --datadir . --port 3009 --vntbootnode "/ip4/101.37.164.86/tcp/3002/ipfs/1kHkLvCyGX5R33XNr7vmboyYe3etLDs1s9t8odPBZyBwNyB" --syncmode full --rpc --rpcaddr 0.0.0.0 --rpcport 8880 --rpcapi="db,core,net,vnt,personal" console


After successfully performing the above 5 steps, you should have connected to the VNT Hubble testnet and started to synchronize the blocks. The block synchronization can be viewed in the following ways:

Connect to the node through the attach command:
$ cd vntnode
$ gvnt attach gvnt.ipc


View synchronization:
> core.syncing
{
  currentBlock: 1992176,
  highestBlock: 2003529,
  knownStates: 0,
  pulledStates: 0,
  startingBlock: 1990059
}



Testnet faucet
For development and testing on the testnet, you need to use the VNT test token. If your account does not have a token, or the token is insufficient, you can apply for a test token at the faucet of the testnet.

other information
If you want to become a Hubble super node, please see how to become a super node.
If you want to join the Hubble mainnet and become a full node, please see how to join the Hubble mainnet.



## Join the Hubble VNT Network
How to join the VNT Hubble mainnet
Contents of this article:

Mainnet basic information
Join the mainnet
other information
Mainnet basic information
VNT Hubble is composed of 19 witness nodes, responsible for executing transactions and packaging blocks, deploying 3 public full nodes, and enabling RPC services, which can be used when querying and sending transactions.

The 19 initial witness P2P addresses:


## How to crate a smart contract

VNT smart contract
Smart contracts in VNT can be written based on C language. The smart contract contains state variables that can persist data and methods that can modify these variables and access these variables.

Create smart contract
Before creating a smart contract, you need to import vntlib.h or copy the content of vntlib.h to the starting position of the smart contract

Download vntlib.h

#include "vntlib"

constructor ContractSample(){

}

State variables
State variables are used to persist data to the chain. State variables include simple types such as int32, int64, uint32, uint64, uint256, string, address, bool, and complex types such as mapping, array, and struct composed of these simple types. State variables are declared through the KEY keyword, and immutable constants can be modified with const. For simple types and struct types composed of simple types, initialization and assignment can be performed at the same time as the declaration. State variables must be declared in accordance with global variables in the c language. The assignment of the simple state variable is consistent with the reading and the variable in the C language.

Declaration and initialization of simple state variables
//Only declare
KEY int32 var1;
//Declare and initialize
KEY int32 var2 = 1;
KEY const int32 var3;
KEY string var4;
KEY string var5 = "string";
KEY uint256 var6 = U256(1000000000000);
KEY address var7;
KEY address var8 = Address("0xaaa");
//The declaration and assignment of multiple variables of the same type can be separated by commas
KEY int32 var9,var10;
KYE int32 var11 = 1, var12 = 2;
note:

The assignment of the uint256 type needs to use the keyword U256 to convert the number.
Assignment to the address type needs to use the keyword Address to convert the string.
Usage of U256 and U256From: U256 can be used for uint256 type initialization and the conversion of numeric constants in the method body, U256From can only be used for the conversion of string constants and variables in the method body
Usage of Address and AddressFrom: Address can be used for the initialization of address type and the conversion of string constants in the method body, AddressFrom can only be used for the conversion of string constants and variables in the method body


KEY uint256 var1 = U256(1000000000000);
KEY address var82 = Address("0xaaa");

void functionbody(){
  string a ="0x1";
  string b = "10000";
  address addr1 = Address("0x1");
  address addr2 = AddressFrom("0x1");
  address addr2 = AddressFrom(a);

  uint256 addr1 = U256(1000);
  uint256 addr2 = U256From("100000");
  uint256 addr2 = U256From(b);

}

Definition, declaration and initialization of struct type state variables
The definition of struct type follows the definition rules of c language struct

struct S1{
     int32 a;
};
//Only declare
KEY struct S1 var1;
//Declare and initialize
KEY struct S1 var2 = {1};
//Only declare
KEY struct {
    int32 a;
} var3;
//Declare and initialize
KEY struct {
    int32 a;
} var4 = {1};

//Use typedef to define struct
typedef struct S2{
     int32 a;
} s2;
//Only declare
KEY s2 var5;
//Declare and initialize
KEY s2 var5 = {1};


KEY struct {
  string str;
  address addr;
  uint256 u256;
  uint64 u64;
} s1 = {"teststringinstruct", Address("0xaaaaaa11"), U256(10000000000011),
        1000001};

KEY struct {
  string str;
  address addr;
  uint256 u256;
  uint64 u64;
  struct {
    string str;
    address addr;
    uint256 u256;
    uint64 u64;
  } s;
} s2 = {"teststringinstruct",
        Address("0xaaaaaa11"),
        U256(10000000000011),
        1000001,
        {"teststringinstructstruct", Address("0xaaaaaa1122"),
         U256(1000000000001122), 10000012));


Declaration of array type state variable
The array type variable is used to store any type of data with uint64 numeric index. The array has three elements of index, value, and length. The length is set for the array through length, and the value and index of any type are combined through the joint assignment of index and value. index to associate. The type of the parameter value when the array is declared

//array declaration;
KEY array(string) var1;

//array assignment
var1.length = 1;
var1.index = 0;
var1.value = "value";

//array value
var1.index = 0;
string val = var1.value;
note:

The length of the array must be set before the first assignment of the array
Assignment and value operations need to be assigned to the index in advance, and then the value assignment and value operations can be associated with the previously defined index
For multiple assignments to index, value will only be associated with the closest index in the code
The value of the array can use any type, so it is possible to nest the array in the array
Array does not support initialization in the declaration.

Declaration of mapping type state variables
The mapping type variable is used to store any type of data with a simple type index. Mapping has two elements of key and value, and any type of value and index key are associated through the joint assignment of key and value. In the mapping statement, the first parameter is the type of key, and the second parameter is the type of value

//Mapping declaration;
KEY mapping(int32,string) var1;

//Mapping assignment
var1.key = 0;
var1.value = "value";

//Mapping value
var1.key = 0;
string val = var1.value;
note:

Assignment and value operations need to be assigned to the key in advance, and then the value assignment and value operations can be associated with the previously defined key
For multiple assignments to the key, the value will only be associated with the closest key in the code
The value of the mapping can use any type, so it is possible to nest the mapping in the mapping
Mapping does not support initialization in the declaration.
Compound declaration of mapping, array, struct
The value of mapping and array can use any type, and the variable in struct can use any type. Therefore, mapping, array, and struct can be nested with each other.

Array nested array declaration
KEY array(array(string)) var1;

//Assignment
var1.length = 0;
var1.index = 0;
var1.value.length = 1;
var1.value.index = 0;
var1.value.value = "value";

//Value
var1.index = 0;
var1.value.index = 0;
string var = var1.value.value;
Declaration of array nested mapping
//
KEY array(mapping(string,string)) var1;

//Assignment
var1.length = 1;

var1.index = 0;
var1.value.key = "key";
var1.value.value = "value";

//Value
var1.index = 0;
var1.value.key = "key";
string var = var1.value.value;


Mapping declaration of nested mapping

KEY mapping(string,mapping(string,string)) var1;

//Assignment
var1.key = "key1";
var1.value.key = "key2";
var1.value.value = "value";

//Value
var1.key = "key1";
var1.value.key = "key2";
string var = var1.value.value;
Declaration of mapping nested array

KEY mapping(string,array(string)) var1;

//Assignment
var1.key = "key";
var1.value.length = 1;
var1.value.index = 0;
var1.value.value = "value";

//Value
var1.key = "key";
var1.value.index = 0;
string var = var1.value.value;


Declaration of mapping nested struct

KEY mapping(string,struct{
   int32 a;
   string b;
}) var1;

//Assignment
var1.key = "key";
var1.value.a = 0;
var1.value.b = "b";

//Value
var1.key = "key";
int32 a = var1.value.a;
string b = var1.value.b;
struct nested array declaration
KEY struct{
     int32 a;
     array(string) b;
} var1;

//Assignment
var1.a = 1;

var1.b.length = 1;
var1.b.index = 0;
var1.b.value = "value";

//Value
int32 a1 = var1.a;

var1.b.index = 0;
string b1 = var1.b.value;

Declaration of struct nested mapping
KEY struct{
     int32 a;
     mapping(string,string) b;
} var1;

//Assignment
var1.a = 1;

var1.b.key = "key";
var1.b.value = "value";

//Value
int32 a1 = var1.a;

var1.b.key = "key";
string b1 = var1.b.value;
struct nested struct declaration
KEY struct{
     int32 a;
     struct{
          int32 b;
          string c;
     } d;
} var1;

//Assignment
var1.a = 1;

var1.d.b = 1;
var1.d.c = "value";

//Value
int32 a = var1.a;
int32 b = var1.d.b;
string c = var1.d.c;


#### Multi-level nesting

For the multi-level nesting of mapping, array and struct, the value and assignment need to follow:

Before assigning and fetching the value, you need to assign the index key or index in all levels before the value to be able to get or assign the value.
For the nested array, before assigning a value to the array for the first time, the length of the array needs to be set, otherwise the length of the array is 0
Functions
The smart contract uses the function function to access and modify the state variables. Like the C language, the function can have multiple parameters and only one return value. Function can be modified with MUTABLE or UNMUTABLE, and MUTABLE or UNMUTABLE needs to be written in the previous line of function. The modified function can be accessed by the outside, and the unmodified function is an internal function and cannot be accessed by the outside.

Functions that can be accessed externally
The parameter types and return value types of functions that can be accessed externally are restricted, and currently only simple types are allowed

Input parameter types: int32, int64, uint32, uint64, uint256, string, address, bool
Return value types: int32, int64, uint32, uint64, uint256, string, address, bool and void
Input parameters and return values ​​do not support pointer, mapping, array, struct and other custom types
There are 4 types of functions that can be accessed externally, MUTABLE and UNMUTBALE, Payable and Unpayable

MUTABLE
The method modified by MUTABLE will change the state, so access to the method requires a transaction

UNMUTBALE
UNMUTABLE does not modify state variables, so no transaction is required to access the method

#### Payable
The Payable function can receive native tokens from the transaction, which is represented by the symbol $, which needs to be written at the top of the method name

The declaration of the Payable function:

MUTABLE
uint32 $testfunction1(int32 var1,string var2,address var3){

}
Unpayable
If there is no $ sign at the beginning of the method name, it means that the method is Unpayable and it is forbidden to receive native tokens from the transaction

Declaration of Unpayable function:

MUTABLE
uint32 testfunction1(int32 var1,string var2,address var3){

}

UNMUTABLE
uint32 testfunction2(int32 var1,string var2,address var3){

}
Internal function
Internal functions follow the definition of C language functions without any restrictions.

Event EVENT
EVENT provides an abstraction for the logging function of WAVM. Applications can subscribe to and monitor these events through the client's RPC interface. The event is declared by the keyword EVENT. The event only needs to declare the method name and parameters, and the event has no return value. Event parameter types: int32, int64, uint32, uint64, uint256, string, address, bool event parameters can be modified by indexed, modified parameters will be indexed, indexed needs to be written in the call of the event before the parameter type and C language The method call is the same

//statement
EVENT testEvent(indexed int32 var1,string var2);

//transfer
testEvent(1,"string");
Call CALL across contracts
CALL provides a way for cross-contract access. The accessed object is a function in the contract that can be accessed externally. The CALL method is declared by the keyword CALL. The definition rule of the CALL method is

The first parameter type must be the structure CallParams, which contains three parameters that need to be initialized: address, vnt, and gas
The second (if there are parameters) and subsequent parameters are the parameters of the externally accessible function in the called contract
The return value is the return value of the externally accessible function in the called contract
//contract a, used to be called
MUTABLE
uint32 test(int32 var1,string var2){
    ...
}
//contract b, call contract a
//Declare CALL
CALL uint32 test(CallParams params,int32 var1,string var2);
MUTABLE
uint32 testcall(){
     CallParams prams = {Address("0xaaaa"), U256(10000), 100000};
     uint32 res = test(prams, 1, "string");
     ...
}
Fallback


Fallback is an optional function. If the contract implements the Fallback function, when the Input Data of the executed contract is incorrect or empty, wavm will enter the Fallback function to execute. The Fallback function has no parameters and no return value.

Declaration of Fallback function

_(){ //unpayable fallback
     ...
}

$_(){ //payable fallback
  ...
}
note:

When both payable fallback and unpayable fallback appear in a contract, only unpayable fallback will be executed
Appendix: Types and Standard Library
1. Basic types
Boolean type
bool: two constants of true and false. Supported operators:

! (Logical no)
&& (logical AND)
|| (logical OR)
== (equal)
!= (not waiting)
Integer type


int32 / uint32 / int64 / uint64

Supported operators:

Comparison: <=, <, ==, !=, >=,> (equivalent to BOOL)
Bit operations: &, |, ^ (bitwise AND, bitwise OR, bitwise exclusive OR)
Arithmetic operators: +, -, *, /, %, <<, >>
Large number type
uint256: uint256 type constant needs the keyword U256 to indicate

int256: to be implemented

uint256 u = U256(1000000000000000000);
Supported methods:

uint256 U256_Add(uint256 x, uint256 y) addition
uint256 U256_Sub(uint256 x, uint256 y) subtraction
uint256 U256_Mul(uint256 x, uint256 y) multiplication
uint256 U256_Div(uint256 x, uint256 y) division
uint256 U256_Pow(uint256 x, uint256 y) power operation
int32 U256_Cmp(uint256 x, uint256 y) Comparison operation
String type
string: string type must be represented by "" double quotation marks

string str = "string";
Address type
address: address type is a special string with a byte length of 20, which needs to be represented by the keyword Address

address addr = Address("0xaaa");

Two, type conversion
from\to int32 int64 uint32 uint64 string address uint256 bool
int32 (int64)x (uint32)x (uint64)x FromI64(x) U256FromI64(x) (bool)x
int64 (int32)x (uint32)x (uint64)x FromI64(x) U256FromI64(x) (bool)x
uint32 (int32)x (int64)x (uint64)x FromU64(x) U256FromU64(x) (bool)x
uint64 (int32)x (int64)x (uint32)x FromU64(x) U256FromU64(x) (bool)x
string ToI64(x) ToI64(x) ToU64(x) Tou64(x) AddressFrom(x) U256From(x)
address
uint256 x
bool (int32)x (int64)x (uint32)x (uint64)x FromI64(x) U256FromI64(x)
Three, the standard library method

Method name Method description Parameter type Return value type Gas consumption
GetSender Get the address of the transaction initiator address 2 + 40
GetOrigin Get the original initiator address of the transaction address 2 + 40
GetValue Get the transfer value that occurred at the same time when the contract was created and called uint256 2 + 64
GetBalanceFromAddress Get the native token balance of an address address addr uint256 2 + 64
GetContractAddress Get the address of the currently executing contract address 2 + 40
GetBlockHash obtains the block hash according to the block height, only the latest 256 blocks can be obtained, excluding the current block uint64 blocknumber string 20 + 64
GetBlockNumber Get block height uint64 2
GetTimestamp Get the timestamp of block generation uint64 2
GetBlockProduser Get the address of the block producer address 2 + 40
SHA3 ​​SHA3 encryption operation string data string 30 + 6 * size of string data

Ecrecover recovers the account address from the signed hash string hash, string v, string r, string s string 3000 + 40
GetGas Get the remaining GAS uint64 2
GetGasLimit Get the GasLimit of the current transaction uint64 2
Assert judges the condition and returns msg if it fails. The transaction fails and consumes all gas. This function is usually used for debugging. For production environment, please use require bool condition, string msg void true: 2; false: all gas
Revert rolls back the transaction and interrupts the contract operation string msg void 2 + 2 * size of string data
Require Judge whether the condition is established, if it fails, the transaction will fail bool condition, string msg void true: 0; false: 2 + 2 * size of string data
SendFromContract contract transfers money to addr, the transfer amount is amount, if the transfer fails, it will revert (address addr, uint256 amount) void 2300
TransferFromContract contract transfers money to addr, the transfer amount is amount, and the transfer fails to return false (address addr, uint256 amount) bool 2300
FromI64 converts the value of int64 into a string int64 value string 2
FromU64 converts the value of uint64 into a string uint64 value string 2
ToI64 converts a string to int64 string value int64 2
ToU64 converts a string to uint64 string value uint64 2
Concat connects two strings string str1, string str2 string 2 * (size of str1 and str2)



## How to deploy smart contract
This is just an example of contract deployment and invocation using vnt.js. For more vnt.js interfaces, please refer to:

VNT Javascript API
premise
1. Operating environment
Need to install

node: v8.11.2
2. Initialize the deployment directory
mkdir deploy
cd deploy
npm init # This step will generate package.json
3. Installation dependencies
Install vnt.js: 0.20.7 and vnt-kit.js 1.0.0
npm install --save https://github.com/vntchain/vnt.js.git
npm install --save https://github.com/vntchain/vnt-kit.js.git
If the installation fails, because the g++ package is missing, please install it.

Under Centos: sudo yum install gcc gcc-c++

Please check yourself for other operating systems.

Install other dependencies
# These dependencies are that Ethereum has js tool libraries, and vntchain can be compatible with these tool libraries
npm install --save ethereumjs-tx@1.3.7
npm install --save ethereumjs-account
Instructions

### 1. If you have a vntchain node
If you build your own vntchain node by running go-vnt, and your vntchain node joins the blockchain network. Then, you can use your node for account management, and use some relatively friendly vnt.js interfaces during development to reduce the amount of js code development. But be careful: do not open your vntchain node to the public network , Otherwise, hackers may use your unlocked private key for theft

Step 1: Import vnt.js library
var Vnt = require("vnt")

Step 2: Create a vnt provider connection
var vnt = new Vnt();
vnt.setProvider(new vnt.providers.HttpProvider("http://192.168.0.110:8805"));
Step 3: Prepare the account to be used and open the account
1. Place the keystore file of the account to be used in the keystore subdirectory of the vntchain node data directory
2. Declare and open the corresponding account in the code
// Declare account address and password
var from1 = "0x122369f04f32269598789998de33e3d56e2c507a"
var pass1 = ""
var from2 = "0x3dcf0b3787c31b2bdf62d5bc9128a79c2bb18829"
var pass2 = ""
var toAddr = "0x3ea7a559e44e8cabc362ca28b6211611467c76f3"

// Open the account. After opening, the key of the account will be managed by the vntchain node and used as a transaction signature
vnt.personal.unlockAccount(from1, pass1)
vnt.personal.unlockAccount(from2, pass2)
Step 4: Prepare the contract code
Read code and abi from the file system

var fs = require("fs") // This is the fs library used, please include it at the top of the code

//Define the code path
var codeFile = "/home/mycode/erc20/erc20.compress"
//Define abi path
var abiFile = "/home/mycode/erc20/abi.json"
//Read abi data
var wasmabi = fs.readFileSync(abiFile)
//Parse abi data into json structure
var abi = JSON.parse(wasmabi.toString("utf-8"))
Step 5: Contract creation


//This is the main function of contract creation
function deployWasmContract() {
    // Use abi to initialize a contract object and load the code file
    var contract = vnt.core.contract(abi).codeFile(codeFile)

    // Deploy contract
    // Here we don’t need an explicit signature, the vntchain node will sign for us, and the contract can be deployed using a package-friendly new interface
    var contractReturned = contract.new(1000000000, "bitcoin", "BTC", {
        from: from1, //The account corresponding to the from parameter will be used as a transaction signature
        data: contract.code, //pass the contract code as data
        gas: 4000000
    }, function(err, myContract){
       if(!err) {
          if(!myContract.address) {
              console.log("transactionHash: ", myContract.transactionHash)
          } else {
              console.log("contract address: ", myContract.address)
          }
       }
     });
}


### Step 6: contract call
Give two examples

No actual transaction
In this case, only some query work will be performed, and the state of the chain will not be changed, such as querying the token balance of an account

function GetAmount(address) {
    console.log("get ammount of address: ", address)
    // Generate contract instance
    var contract = vnt.core.contract(abi).at(contractAddr)
    // Call the GetAmount method of the contract, pay attention to the use of call
    r = contract.GetAmount.call(address, {from: from1})
    console.log("result", r.toString())
}
Circumstances that produce actual transactions
function Transfer(from, to, amount) {
    // Generate contract instance
    var contract = vnt.core.contract(abi).at(contractAddr)

    // Call the transfer method of the contract to transfer, pay attention to the use of sendTransaction
    contract.transfer.sendTransaction(
    to,amount,{from: from}, function(err, txid) {
        if(err) {
            console.log("error happend: ", err)
        } else {
            getTransactionReceipt(txid, function(receipt) {
                console.log("status: ", receipt.status)
                GetAmount(to)
            })
        }
    })
}

function Transfer(from, to, amount) {
    // Generate contract instance
    var contract = vnt.core.contract(abi).at(contractAddr)

    // Call the transfer method of the contract to transfer, pay attention to the use of sendTransaction
    contract.transfer.sendTransaction(
    to,amount,{from: from}, function(err, txid) {
        if(err) {
            console.log("error happend: ", err)
        } else {
            getTransactionReceipt(txid, function(receipt) {
                console.log("status: ", receipt.status)
                GetAmount(to)
            })
        }
    })
}
Get transaction details according to txid
Since vnt.js sends transactions in an asynchronous manner, it will directly return txid after sending the transaction without waiting for the transaction to be completed. Therefore, we need to write a method to wait for the completion of the transaction:

// This method will query tx information every second until it returns a result, and will call the callback function
function getTransactionReceipt(tx, cb) {
  var receipt = vnt.core.getTransactionReceipt(tx)
  if(!receipt) {
      setTimeout(function () {
          getTransactionReceipt(tx, cb)
      }, 1000);
  } else {
      cb(receipt)
  }
}


### 2. If you don't have a vntchain node
If you don't have your own vntchain node, but develop by connecting to a node on the public network, then you need to manage your own account, and you need to generate a transaction body for yourself and sign it.

Step 1: Import vnt.js library and ethereumjs-tx library
var Vnt = require("vnt")
var vntkit = require("vnt-kit")
var Tx = require("ethereumjs-tx")
Step 2: Create a vnt provider connection
var vnt = new Vnt();
vnt.setProvider(new vnt.providers.HttpProvider("http://192.168.0.110:8805"));
Step 3: Prepare the account to be used and open the account
Load the keystore and decrypt it to obtain the account private key

var ksDir = "/Users/yanfengxi/go/src/github.com/vntchain/vnt_test/ks/"
var kFile1 = "UTC--2018-05-21T03-11-21.232362508Z--122369f04f32269598789998de33e3d56e2c507a"
var pass1 = ""
var kFile2 = "UTC--2018-05-21T03-11-29.472506793Z--3dcf0b3787c31b2bdf62d5bc9128a79c2bb18829"
var pass2 = ""

function openAccount(file, passwd) {
    var content = fs.readFileSync(file).toString("utf-8")
    return vntkit.account.decrypt(content, passwd, false)
}

var account1 = openAccount(ksDir + kFile1, pass1)
var account2 = openAccount(ksDir + kFile2, pass2)

Step 4: Prepare the contract code
Read code and abi from the file system

var fs = require("fs") // This is the fs library used, please include it at the top of the code

//Define the code path
var codeFile = "/home/mycode/erc20/erc20.compress"
//Define abi path
var abiFile = "/home/mycode/erc20/abi.json"
//Read abi data
var wasmabi = fs.readFileSync(abiFile)
//Parse abi data into json structure
var abi = JSON.parse(wasmabi.toString("utf-8"))
Step 5: Contract creation


//This is the main function of contract creation
function deployWasmContract() {
    // Initialize contract through abi and code path
    var contract = vnt.core.contract(abi).codeFile(codeFile)

    // Generate data for contract creation
    var data = contract.packContructorData(1000000000, "bitcoin", "BTC")

    // Estimate a gas value
    var gas = vnt.core.estimateGas({data: data});

    // Get the next nonce value of account 1
    var nonce = vnt.core.getTransactionCount(account1.address);

    // Generate transaction structure, specify nonce, gasPirce, gasLimit, value, data and other fields
    var options = {
       nonce: vnt.toHex(nonce),
       gasPrice: vnt.toHex(30000000000000),
       gasLimit: vnt.toHex(gas),
       value: '0x00',
       data: data,
       chainId: 1 //The chainId must be specified here, that is, the chainId of the node you are connected to, otherwise the transaction signature will be wrong
    }

    // Generate transaction
    var tx = new Tx(options);
    // Use the previously prepared private key to sign the transaction
    tx.sign(new Buffer(account1.privateKey.substring(2,), "hex"));

    // Serialize transaction data
    var serializedTx = tx.serialize();

    // send transaction
    vnt.core.sendRawTransaction('0x' + serializedTx.toString('hex'),
    function(err, txHash) {
      if (err) {
          console.log("err happened: ", err)
      } else {
          // Print the hash of the transaction
          console.log("transaction hash: ", txHash);
          // Get a list of transactions
          getTransactionReceipt(txHash, function(receipt) {
              console.log("tx receipt: ", receipt)
              console.log("tx status: ", receipt.status)
              console.log("contract address: ", receipt.contractAddress)
          })
      }
    });
}


Step 6: contract call
Give two examples

No actual transaction
In this case, only some query work will be performed, and the state of the chain will not be changed, such as querying the token balance of an account

function GetAmount(address) {
    console.log("get ammount of address: ", address)
    // Generate contract instance through abi
    var contract = vnt.core.contract(abi)

    var data = contract.packFunctionData("GetAmount", [address]);

    console.log("the data is: ", data)
    // Get the next nonce value of account 1
    var nonce = vnt.core.getTransactionCount(account1.address);

    // Generate transaction structure, specify to, data and other fields
    var options = {
       to: contractAddr, // This field is the contract address
       data: data // This field is the data called by the contract
    }

    // Use vnt.core.call method to query, no transaction will be initiated
    var result = vnt.core.call(options)

    // Decode the result and get the result.
    console.log(contract.unPackOutput("GetAmount", result).toString())
}


Circumstances that produce actual transactions
function Transfer(from, to, amount) {
    // Use abi to generate contract instances
    var contract = vnt.core.contract(abi)

    // Generate data used for contract calls. This data is to package the signature and parameters of the transfer method
    var data = contract.packFunctionData("transfer", [to, amount]);

    // Get the next nonce value
    var nonce = vnt.core.getTransactionCount(from);

    // Generate transaction structure, specify to, nonce, gasPirce, gasLimit, value, data and other fields
    // The to field is the contract address, and the data field is the data called by the contract
    var options = {
       to: contractAddr,
       nonce: vnt.toHex(nonce),
       gasPrice: vnt.toHex(30000000000000),
       gasLimit: vnt.toHex(4000000),
       value: '0x00',
       data: data
    }

    // Generate transaction
    var tx = new Tx(options);
    // Use the previously prepared private key to sign the transaction
    tx.sign(new Buffer(keyMap[from].privateKey.substring(2,), "hex"));

    // Serialize transaction data
    var serializedTx = tx.serialize();

    // send transaction
    vnt.core.sendRawTransaction('0x' + serializedTx.toString('hex'),
    function(err, txHash) {
      if (err) {
          console.log("err happened: ", err)
      } else {
          // Print the hash of the transaction
          console.log("transaction hash: ", txHash);
          // Get a list of transactions
          getTransactionReceipt(txHash, function(receipt) {
              console.log("tx receipt: ", receipt)
              console.log("tx status: ", receipt.status)
              console.log("contract address: ", receipt.contractAddress)
              GetAmount(to)
          })
      }
    });
}
