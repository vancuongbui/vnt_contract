# VNT-CONTRACT-DEMO

## Getting Started
 
### Start the test node
  
Reference [tutorial](https://github.com/vntchain/vnt-documentation/blob/master/introduction/set-up-vnt-network/set-up-4-node-vnt-network.md)

### Deploy the contract
  
Reference [tutorial](https://github.com/vntchain/vnt-documentation/blob/master/smart-contract/deploy-contract-tutorial.md)

dice contract deployment [tutorial](https://github.com/vntchain/vnt-contract-demo/blob/master/contract/README.md)

Please make sure that the contract deployment account has enough VNT to transfer a certain amount of VNT when the contract is initialized
    
### Launch DAPP page

Install dependencies.

```bash
$ npm install
```

Start the service.

```bash
$ npm start
```
  



Package block
Unlock the account and open the consensus on each initial witness node, and you can see that the block is continuously generated.

personal.unlockAccount(core.coinbase, "account password", 3153600000) // 3153600000 refers to the number of seconds to unlock, after this period of time, the account will be automatically locked
bp.start()
Above, the development and test network is set up.
