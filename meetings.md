## VNT progress
- Currently working on separating Dice contract:
  + Data contracts:
    - Interface parts: for logic contract to use
    - Implementation: for detail implementation of the contract
  + logic contract:
    - Implementation: for all logic/operation part
      + Deposit
      + Withdraw
      + Bet
      + etc
  + schedule:
    - compelete this part by Aug 25.

- Deployment
  + Check valid VNT chain addresses
  + Compile data and logic contract
    - This part may have some issues (no instruction yet)
      + compile data and logic contract
      + deploy data and logic contract 
  + Deploy contracts on VNT chain
          var provider = 'http://47.102.157.204:8880';
          // var provider = 'http://127.0.0.1:8880';
          var chainid = 2;

          vnt.setProvider(new vnt.providers.HttpProvider(provider));


          var from1 = '0x122369f04f32269598789998de33e3d56e2c507a';
          var from1Keystore = 'replace';
          var pass1 = '';
          var from2 = '0x3dcf0b3787c31b2bdf62d5bc9128a79c2bb18829';
          var from2Keystore = 'replace';
          var pass2 = '';
          var toAddr = '0x3ea7a559e44e8cabc362ca28b6211611467c76f3';
  + Schedule:
    - complete this part on Sep 30

- Running VNT Node on Ubuntu Server
  - Sep 15.

- Longterm plan
  + Complete the documentation: what ever we added a function/feature
    - convert
    - need to do
    - Interoperability
    - 

## Eureka Competion
  - Winner of the competition
  - finalists in the Jinan International High Level Talents Innovation and Entrepreneurship Competition 
  (hosted in Jinan, China, in the week of 7th – 13thSeptember 2020).
  - meeting.
  - 





## Contribution
- our contribution on source code







# MEETING WITH PROF YANG XIANG SEP 2 2020

## VNT project progress
- Contract Development
  + Complete data and logic Contract development
  + Complete contract compilation
  + Contract deployment to VNT network 
    - Currently not working:
      + the VNT network test port was changed
    - Solution"
      + build simple 4 VNT nodes to test (prefer)
        - Current progress: 
        - Resources: seeking resource allocation from Nectar cloud for 12 months of the project, extendable to 24 months

    - Time: at least 2 weeks, by Sep 20, 2020

    - meeting with VNT next week (Thursday or Friday)
      + present: what we are doing
      + discuss deployment plan
    - 

- Documentation
  + Simple contract development: 
    - documentation based on VNT tutorial

  + Upgradable contract patterns
    - Two patterns:
      + data segregation
      + proxy pattern

  + Contract Compilation
    - documentation based on VNT's signle contract compilation using their tool - bottle

  + Contract Deployment
    - documentation based on VNT's single contract deployemnt, on:
      + VNT network
      + local personal network

  + Contract Revoke and Query
    - documentation on testing the revoke and query of contract

  + Contract upgrading
    - upgrade existing contract documentation

  + Review the documentation



## present Eureka Competition - Blockchain-based signing service
- Present the project
- present Be-Sign DEMO
- working with existing with Swinburne University
  + real life application
  + 

## Meeting with pr
  21-Sept 2020
  



https://hubscan.vnt.link/developer/test
- test on this one
- ask the team for any problem
- wechat: for cummunication
  // profeffor

- Timeline:
  2 to 4 weeks
    + 
- speed up process




## Meeting Sep 24 2020  
1. report progress on VNT project
  + Complete stage 1: 
    - running VNT private chain on cloud server
    - Successfully deploy contract on the network
    - Documentation: complete 50% of the work


2. Next step:
  - Deploy Logic contract on the top of data contract on vnt private chain
  - Complete documentation the other 50% work left
  - Time: by first week of October 2020.


## Meetigng Oct 02 2020 
1. what expectation from VNT as they did not respond to me on WeChat
- The problem: how to upgrade smart contract on chain
- Do they have solution to this problem?

2. What are your suggestion to go ahead with this project


3. 
