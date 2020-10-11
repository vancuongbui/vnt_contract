
	var projectContract = vnt.core.contract([{"name":"$Dice1","constant":false,"inputs":[],"outputs":[],"type":"constructor"},{"name":"Bet","constant":false,"inputs":[{"name":"amount","type":"uint256","indexed":false},{"name":"bigger","type":"int32","indexed":false}],"outputs":[],"type":"function"},{"name":"GetPool","constant":true,"inputs":[],"outputs":[{"name":"output","type":"uint256","indexed":false}],"type":"function"},{"name":"GetOwner","constant":true,"inputs":[],"outputs":[{"name":"output","type":"address","indexed":false}],"type":"function"},{"name":"GetTotalGameCount","constant":true,"inputs":[],"outputs":[{"name":"output","type":"uint64","indexed":false}],"type":"function"},{"name":"WithdrawPool","constant":false,"inputs":[{"name":"amount","type":"uint256","indexed":false}],"outputs":[],"type":"function"},{"name":"$Deposit","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"GetFreeChips","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"GetAmountFromAddress","constant":true,"inputs":[{"name":"addr","type":"address","indexed":false}],"outputs":[{"name":"output","type":"uint256","indexed":false}],"type":"function"},{"name":"Withdraw","constant":false,"inputs":[{"name":"amount","type":"uint256","indexed":false}],"outputs":[],"type":"function"},{"name":"WithdrawPoolAll","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"GetNickNameFromAddress","constant":true,"inputs":[{"name":"addr","type":"address","indexed":false}],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"SetNickName","constant":false,"inputs":[{"name":"name","type":"string","indexed":false}],"outputs":[],"type":"function"},{"name":"GetNickName","constant":true,"inputs":[],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"GetAmount","constant":true,"inputs":[],"outputs":[{"name":"output","type":"uint256","indexed":false}],"type":"function"},{"name":"GetWinAndLose","constant":true,"inputs":[],"outputs":[{"name":"output","type":"string","indexed":false}],"type":"function"},{"name":"testRandom","constant":true,"inputs":[],"outputs":[{"name":"output","type":"uint64","indexed":false}],"type":"function"},{"name":"WithdrawAll","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"$DepositPool","constant":false,"inputs":[],"outputs":[],"type":"function"},{"name":"EVENT_BET","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"nickname","type":"string","indexed":false},{"name":"amount","type":"uint256","indexed":false},{"name":"bigger","type":"int32","indexed":false},{"name":"lottery","type":"uint64","indexed":false},{"name":"reward","type":"uint256","indexed":false}],"type":"event"},{"name":"EVENT_WITHDRAW","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"nickname","type":"string","indexed":false},{"name":"amount","type":"uint256","indexed":false}],"type":"event"},{"name":"EVENT_DEPOSIT","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"nickname","type":"string","indexed":false},{"name":"amount","type":"uint256","indexed":false}],"type":"event"},{"name":"EVENT_NICKNAME","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"nickName","type":"string","indexed":false}],"type":"event"},{"name":"EVENT_GETFREEVNT","anonymous":false,"inputs":[{"name":"from","type":"address","indexed":true},{"name":"got","type":"bool","indexed":false}],"type":"event"}]);
	var project = projectContract.new(
    {
     	from: vnt.core.accounts[0], 
     	data: '0x0161736db91a4c0100789cec7b0b705cd599e677eee973d5eadbdd6a49367edb57b23136c8b2e4878c8d0d6e195b3160276b9b574822b7a4dbad0ead6ed17ddbc63cd48a64de90e00c9949c2209c00893701c266b21b306c4db224536426a49299c1a4520cc924a1d65321b349d84c2581305bff39f7d5ad16202049edee9842f79cfffceff3ffff3da7ebfebfbd38fbc4b647912a8d3000eca2f84156c1416d6c0c07d9180e6a950aab1c146395b14a05078183601502e220a305b0b1835a45e2b2ca41bd52a954c62a38c82b950ab4a74226b7f287f47dd621ab680334495c5eccdad6e5597bf87d856cdeb68a60046eda67a586a641f5e4d0505faa048d26e14bd76dece9df53ce81fbd31d23a3c1e985d943c1e99ec250709a1caa9aee2f0fa86924393474b17564773e5d408800adbbf3593b9bca65afb32e4b15b3a9819c5582a095c63ecbde6fe587ac22749ac7de57cce6ed4bb3797bddc69e0368205854c292434345ab5452a0963ecbde51c8dbc5d4a0b720e9e7f659766f2a97ca0f5abb8a8511772d4c6b62e735e594636db4cfb20f6447ac929d1a1945a32f8644f76c388008811a88c7a53d1b60d02cb4ff3dc9f58a5558e2eeb78b4a1dbdcfb2c9af924fe3cecb76ee3dd0dfbbf300a2349f73a098ca97d2569198b94a2b2de20af5f2dd07de73e1bee4e58849de7d967d592a57b61c8f289c0b77beefbdfb771f50280905ebdb7960d7be9d3b2fdbeb38ca61b777f78e8bf726f7ec7474db51c80fa648e092c5427021c24063630304841002615d0febbade2842828d32c60467d0f4b9bcc292e377858c0adcc76b51a3e11fb5f9fa883552281ed160f4f70f5ba9d1fe8154c9e22cd2df3f94b253fd567e886b89216b30972a5a43bbcaf9413b5bc8a34d5f716176d0eac68a886d95ec7da9fc506104ab79af65e3ec30c5e950317518e718ee3099cba123eacede5728e4b0a629382584cee88a0badd142296b4b84b561778a2edadf5d45cbda319c1d2da1dbd86fd97bb38357ef4d8d585877469f3f0b46c97a23b0800db411ef3d9cb78ad838a7cfb293238572de0ee2f7347a606c8af559f6e5d97c323f7449a164e1dc863e4ba9b5b99962ad60a7727da9116b87c4ded2b862572a971b480d5e8df3225f6f5bacc1588a5ef422f191f1f171359a50a3c4243d8d3463156dbbc992e3b78e8f23711301936c570cc98724605c6269db4d988cfe4fdc4c80762d71949e12720b8d12b78e7bf43b63483e1ea03635e3bf85983696fcda9de3e378a41dc950f2841ab264631289db15af64c864c986aa39fcf5e4e32e75d8ac260bd79085abc84ebb64a20afc0b4f972af00b3e76b5105123a49adbf1fa427ee3821baac08fbd3d215f71c9f41a32bd864caf227bb0be6edf7f7b4a3ce3fb6d369bf7ddb74566ac42e201195877482e48dc49cf1e4d3a36895e6ce272238d4f31c62ac913b7492689bb24f6d76f9348ab34b93b0ef0ef148a0ffeac0c68a69655a03b6950a13478ee3637ce6f93880e1f134d46f2593fc867c633fe9a318d720c2ac7926c97e21f43f29f6ff3b3c435ae9df56827ee74349791d2a6257f29b9b3c447a5acdfcb99e6aa4cff999a8980da727a9be3330fcca25a95d2f5b0fa62cc48de7ebb87d36418ff5d63bc92f898dc87bbe96f1b4b7e4662289852eaabb72b15959b9fbdddb1e0b4ef7b13898724b9bfd0a69948be22359205a58dfb8ef28a89c94da8bae3a07a55e6eeaa1ae5f881ab5ad44e1e0a7804260fee6ba58d5345ab71ce8b811dadc1908e79b6ba28b25aff997c578c22e3c7be038da7196763bca28d25efbd83a01f77e2e3cf5476dea13c738f74e5276affb6b3c49f4bbc2f2bbcde0b263edfae25b50fb77367e129c9f42f6455bf60b257bba11d9f7796be216998c93fdc05b4871c89df73a0da87936a41380b2fca0561c20c8d8df5be840957491346dc4dc413d2a6bf89705661635a454193ff724720f14c243ee73c3f2f69645cb7698ab68d2791c46a95b7bdec062783e54b88f5d16ef7ae3f104312a6e6248217378c76d84b8bf690c99cad166628b8d5c24f61b96b815d359230458f62e072fbfe3be5f6fd20b7d3ef94db6995fce4a3af793e92235323015f513e4932939b2cf14995a4d27d15e5beeecbfec37d6feebe4ad07d01779127a51bd7ed8b79be6b17c95fdfe15729a66d37456d9562a670aa94429db14afdffb405dff5b6e0bbd3b700bdeb8211ecfb4504cb2eaaaa6e52562855756bbcf082a33766d21b6fa2f70b8a9bef83b7ac47c0e2673c8b9f996631d562276ca4d5c6493a1ba81aea564d6dbb7b0e3091f8941b433099179fbe9fb437d44f9be627dfb2b74c29d14d163022f1698966ac745e09fea9acfad892f8a2c4dbe9a0b976d1ba3cbe258e8dab53d0f81d81bb42d53bc3f5c042e32ac61c3f551d44de15de61878bf1f78c855c29f7ba27959a535975026b5eb0f1ead3067fe360e335a17bfa9d720b6cd363ce36fda55cfead6f93670b02a1b406f25e453176cb9d33d529c9f741a5a3a721abd6509bbdbdef065b37f3d8166508bd1813f749842e2f66ea9cad4df438014d79362509167b116d06a359a2191d7e04de198cbdbac8cddea2139033f17e6c36bc15f221c6c766c83ce795d7e617a236e655613a6bab6366f25eb9d3f78fab6b843a7ade3f6d8505578c7d5ea5d2b60773b01d810dad3e703b77a1ea9b920f0f78c9390efac7ccc7548db94b7024c7c3c67da1f2ba8d3ddd1bd76fea3e77dda64d3d5da0f9fe54dada53ce99854356319d2b1cc6a50ef0c2ec21f388b96d9bd955059a86b7bf3c605e6b6e3de2019243433e56b5c8eeae69803aff90b16c33257fbc31b3793363d945eb70aa38b4452ea42dabdb1bad532377dd211a29976cf37c53312ac9df3015de80fafd710bf6164c2b5f286786cd9142de3a62da0573c0b225cea0f33ba09952bf256da9867a2c083aa47ed49a996f366f8e16b3d759e668a190c37bf3b923a63d6c9985c379ab680ea6f26661d42aa66c4b72b3b323fec02c0da7d6cb59363f645d2b47995449992b7fa4eb4f0527038e234ae59c1d70e096e90ec79142d91c4e1db2cc4cc13607ac74a168610d903c1e35c2a5107034042079226a1cc01fe2dfb18546e7903550cef467f3e9028b0121090f31fa1bc57207ef02e7f9350668d703d804409b2fb8a9037c2b51f401380a80ad179700d02bf4876977bac88b055fa103da5f002813a049f055447d1d8086ed5a53f8388007e40ac20f0378548ec3e14d0ce822c14de72a310f92980da12700ac2578aca14be3e12f03204d3481f049004b69490f85ff16c06a1a3784c32fc061154e84b9cbb6717e38e68e2366782173f818abc22bdc71b443897e9a4477eba708c642e731e03582acd15f222bc2da6e06ec27462d828f927592eb15cc71c25cc187c9090719701dad2c14fc5a4223bb1bc9e9cd003ec780c8a3f4e709021982ac01f07b06b09f46d3f4f8108be5e5934c8b5d2b8764b1e242aa7e8703911fd09f973810ff05079a88f346004da4f4ff52ec915801200d20ae01ec15b237762bf386b77bc3e64fd2f0df6828396d211ae2f4eb80b672e5b02be3378e0ca91549fe9e0644fe89fe9cd68096cf311558ecf520e27600af91e68d2120323704c4db42402b61cf27ec1073d00d8aaf1e0d58a801da4ae3690d580560254d77ceb981147e8d1466caa4d77c93e410899f6bc0a700ac218abd72f99bcc1d368739a0ed93c3280d0fd0b0858ce8a2fd3c5063ca15415330f7560efc352500f17ebfe2fb7ec9ac95987d9076bd99e256ebf79c3ac59553b50f283652d82801066a84dd1a142621c7159a82ccb993ac7c3960fccbbef12ffbfbf9afd20f677c9ac68c49f479b7fa9379b7fbe3f99280cb31e6ee0e01db18b083accb28eb3292ef7cb22eeb7b6d445a4701f96008780f69395a2f34ff2954139a2d14058f2bfc3ab1f0ddaa58909e3a4dc885da0863b59e9a4fcae683314751d3d708c4dfdbe868b3c0096fedda407863c1ad4295813d64f6f594dfcdabc8c81be5700d0d2b9489cd9b68f81109dd46c349394cd2f02639bc8886b7c8e17e1ade46432cbc4457720f90808f116cee0774609700fa09748f72f53d72373f4084f7fc2a0a34ff17827efa012f6cef25d2454fe9c01ae6eec467e44e90575fd455426a9fadf1ec62b23dd4e0ec84e75d49d4d1e0103d508f685f7da2eb5ca207eb111d9f468445af3604757ed8d37949d8e1f4483d4e3bc275c55fed123d5a8fe8587da2275ca22fd523fae134222cea6d04b29ece5ff522fea24627e21faf17f1938d35112fa51f6f74a43f514ffadf34d655f95f5da293f588e644ea126d8d38444fd6231a9846e4d43e8ab4a7fd2493a67c33e2bc0d5e0f0af8dfae806fd413b0d0a81520f9bf87f87fb386ff1ea3863fe63e6800f4aa1fa4b47856a5c5b37e7dfdde032e437adf6aa76a18febc96a144a557a9f67c0dea59d15ad94bfaa3c04a003992fd62b394fd63591897128556662a210f3f204bcccd51602780fb1a81c843b483546cee8a026792777ee6979d07a3f5ca0ea28f13b7d34c59795a4a5af2ed287015806b49895f29257e2d438fe4fc240aec204effe64bfc973a1211ab2b11c6aa181006702bb17f75d9ba18f0f7003e4153b0f9529c7a1bcc970e0f31327631ed7b2ae6ecbbceea6dfc2db1da8d97545f72a91aea523d378d0acbf438f05b0053a4548c2945125291f9451ab7303a2249fa73e28a5e6b75e8a5d0fd71603d41e7d4157a385e57d52fb85473eb527d671a154c02d0b1e18ba4ea2236ef30974f7a5928b59732152cdd4dc06200f71a40e48441afe76f93afcf94b86cde4fd44422b7ed6d023a007c95b8ae91188b89b0bf0958480a7632c503edd737a903269d92b46e49df789723ab210a44e64449d66962bfd1390afc444d94ac2f38b2be4d0cb6498cc544f8a42beb7ca678a0edf926e0108053849a5446de4046ee64543ee68fd378971adf44e33e3946dbde04b00fc04fe5814c45978cb4ff24c7ad94a477d37c1fab79cd9f08bee6d1fe9984b2f665627499e4befcaf122ad45f27d8952cf4fb2890e300ebd2073920424022ee5c89465283742b024e8998032aa6f219ab444c5b29f6009c13b84d91673a01ac03707e00be8e033b38b09b828d03fdf456e2c0351cb89efb784907cf5d77ffd12b231402e68480b3433efc371cf81d577033006fa2f35108d818022e0cc07f1e021609a05b0049e1c31788faf06502e87260b900bcc381ef15c00703f0b2000e0be088006e0ac01f8f00ff10014e45801f457cf87603b8ca003e6400c3860fff9101bc6a00af1b4038eac31746818d51e0dc28d01b808f26805b12c06d09e0fe840fbf3e01dce8c03f1180cb6335005271b933a75734dd836e77e63dce330980ee18ff435369f3330da02bc3cd1ca0e37d5f08a083f0cd42e1afa67229808b75800e72efd7013abd7dd600e875f5a12840af8e9ba200bd13fe2e0a50153f2b0650b9ed8a0154674371804adbbfc7d555aaab09a0b2b0a709a08cbfae09a074beb309a014fecf4d0065e7a92680526f4f02a04c3a9e002811be9c0028f8bf1ef0033e1e72033b353050b40eb1667666bc55f07862dea27833bb741ea06d008fef6ebd60c116e33c439b0ff08dd8dd0a84cec0ee561e2728209a244c5f011e3fdf300ca0a19519865a0cc724079a9c6b008d9dac99b5e8ddad4044801e462708a2985db00088763235396bc1050b4c038809280049896f90544d4b58772bd15d615c690009c5d6a5238d81e60d01ba1622b8749e426ff5260298e3cb233a9238b79a1d313bc3c1123ed63c472f41fce76f084c1604e995320b83662ad0224362018b03c6086049909a1097ba1a2ab9cb02eb82d6cd2040a9db16042971ed010d1cd0f2208800c04fbcdf8472d9bcb55ffe264459c0187b351ea3877ba3ea44a16c8f96ed6ee050dece65073a8709ae3e62eb1f2d5a838591d16cceea1c84469c854694fc45301189b4096358e7539509c174fe53981a0363101a2525ff2963428f5c79ffa460197741d2becc9868896c13f127c52afd5762c35671ce9488e8fc976313c2389ff89d14bace7fc94c8d2b324a6afe0a63221ed92696eb6193d07f36660aa34ba1c775fe1b668ae5fa45a245ef10cb8f8bf5fa84583825e269423d3d960e72fe9dcf592af49ae4dc2696e8a708fbc763a688f1fb59a7d0f529fe1112a3f31f8380f73162305565ce4734cf9c25fa49b1dc142b3bc5c693c4e9853153e8fc21d6a9f3576fdceab2d1f903eca45420a441c85fd7f8994cb0c8b170f995f095e1d6575e0967c24f069e0ed01baab9d442b2a0a2c6bf09e2d196118d1961e89da2312d5af447042bfb7854f4f877c0048f6c7b5e2cd5d382dfad0f8b664b2c5d23ce5c2b9a755b703d136222cebfc826020e096982f37267888918ff024bcbe9a9b1a9499d7fa1b235c41cd324b874721a966f2c955bfe03306144b685988884d7b97b18d24442e72fc2142d6b442223563c22f8b1e7a52af7b1536289b3ebdee6103effe1d89430d6898dfa0431d397eafc78e5a2aaed9a11add3d7993da5f3bfac985e044b4de985c0ff2798581fd9269690abf449b19a9e693df3bc1add2de6e819b1fa3eb16a5d888916fe3aee16f157dca86ed1ef13e7644484ff32107e2d3a9fd44cc2aa132c4aafb8ce5f6717c9756570d02a2fdea7a37456a1c474feef8cac6be0bf183b255a87c9745ed84af6f2d64e9ddf5531831bc778f349df7a19d9bf061373226d62c1a430f4bba5ebf8703ab0614ce7bf0dfa8c5e9afc55195f8728aa78e6a838d312a63e2116a5c519e4c3cc5131cf120bae145c4feb4745c2120bf409b174ab98a7b709ae6fd587c5124bf0c9a3e20c7e382d96dc20f8c547c56a4b2cd53bc5ea2bc4da8b04d7db0211452f68fe5126635fccd3d32291f615a2b736bf472e9605cf3c3f29e64c8ac4a46899140bc3178b846e8b16fdcfc4198f8896fbc4e661b989ff0c5bc4ef9f797b024e0e6962b1ce3fcb4c715eb85512ff6856c44ba91498629143fcc35911c774fe2033c592978408b78a588758d925846ed3a62c3fa5f3af8e996299ce4f3053ccad67e6a9d99af948c0cce7666be6a30133ff71b6667e690633e73b669ea1f3bf6227bf2d996f9a78930c0c6962b3ce9f60a644ff5b3c333b2f3c11f0c2b766eb8593012f3c335b2f3cc94cd156eb8598de21c42582f1e884f2c5669d3fcdae9065f33c3b50200259bb98504c59a4b752195dcc2f9c125bbf25b5ba60364a2dd3f937c8a297a4b8cd3388535852dc799d218def9a12cb4a62e925d29265e78895ddce7e86dbfdc4a563367f5626ee36c13394b00d93fa9468d12f109b95bc5533c86bd1f9738ebcb39579974f899692587489243b6b06b298ce9f2732be8a94bc624a88b288ad11abd79276fcc4983ce3fc8005aa1d5d01f88b4ee54964448bde291269b15c3f2678d93df4484cba24f0d30ee61c7e57253d734de53a7f999962fe245548c1f4633e1bba63f05f394e393b23e648045e9e982d4f1eb9dbe74a3716fe3b47b9263d503de90ec3c735256f4e46248e3aefe64db4032dd7cc225416eafc66cd140b54f08fbe754a9ddfa299823f228c3562e55ac165a44cfa3ad2fd8adfe5e8981876145cfa2df9b6fbce981d48fb84ce8f69a6d89415896bc4f63d32de0bb6884fcec2887b9411626149b45f2c39e467c141e79fd04cb1f425191ff7fb46d0e590df5b6bc4223a0155e1d1e5913fa47911b7e05be4107f9d2e95fc61874fa7daea23130e66e2888f48b74efe98167869060282aea2fcbfce2c85aea8fc29474ac71b48a13b2cffba6b969720cbf46322f131617689c447c5f26eb1f8e362ae3e21ba4e8af884989b160d693d2322e314ab01d3127474d502b13f21963a47d5872b0f8b25fa54edf190f37fc094ce1fbdd13fe7786742b9e673a7db357f6e067fd0959b7fdff5879e168b955ef86443c4b96595ece2602e95cf9887ac62295bc89be77676757699abec62397fb5b97e43f7e69eaed5ee4d6b6dbdcbd5da4b4b56b1b476b05cc86706cad9b5a3c5c287ad417beda1bc3d389ccae669b0c6fd6a62cd90355258ebce90b62c0c0ea78a28ab6e32a48b96e574eba40607e959c2d5d611389f60e0906cba72beb240deed032ad9c56c3ea3a81dccfede422187c3d9bceae6c915f21953fe29e74bd94cde1a32b3795bcaedd9805ca1e474fd0c0e6707afb61ca2c3d9fc3ef941894470f44a2abd30921a1dcde633fe1715b0ab1b889c6f4220bff1c03eeb9a72b66861b0901fcaca86ab915226f8ed0cae85ffe9cc9e720ed7053fa4c1e0b03578b56a75521fb2a0aaf34a7de48119baa6c87da8db1f35ad0d2cf0890f79fedcab7b365b1b464acebd1a19cb765c2215727c22c7520ff5110a021d64bd96eda98a60ef586dab5855a398d72656d524166c11ebab1e2bd7f8cd5ed5ad5e6ea3d7f4362fbfc9ab6895a0be1f42ba5818811ba54eaf22e45739f4a75f7e91e37c8d932ac1fb0ac7fb02c7190c62209bc95845157d146fd9bcbd7e1dd2b954067952fc70362f63cb8d3be0cff510adb08fea5be17491b2690da45a6def2877da46435ec7a8f09a4575af4fb4c16b110d7bdda18d5e636824d0136ad46b078dfa9da0b1ea26d07855ff67539dd6cf44fdaecf66d5f0d952d5ebd95ad5e639c7edf09c2b9b3bcff0fa3ae7392d9df3fd6ece05751b3917d6f4702ef2da371757776e2e99d6b4b9b4a65f7399d3aa6936f7f71f4e9546fa0753b95cffa05d2896daa6b554b61b81645a6e04b26985d36b7966a3974f2b8d40429dd5e865d42a5d05d3ea4057e6d9bcd7b2cff17a323b822d996baa3a323b6b1b32d756f5637679ed98dd55dd98eb82cd98eb67e8c5dc106cc5dce87562f6d46dc4dce4f7619e5bdd86b9d9edc2dc32bd09f33cbf07f389d857aebabe9d52a37d4bbbf25e7b47fb60215fb25379bb7d4b3a952b591dedd9fc68d92eb56fb9ea831dedeaade54cec23a34429098a65dab1f61b3b3c86bd96fd86dc3c445567db3d7ece8bab9d7087ac6bad218736c05bd5009f44d680e90433289c768329c0d1715895c676b13ca3f91ea102bd05eddf54bedcea77ae80f35e7f1b0a5407cabbe38a9e0db35524985def7200cd221edc247e3b0931837bbd52f02ef29c5614de68d77c870d0d15df5ac0fce102dedde63fdd16d794f1777157ea54f63ffebea803fc6cb725f0927a6b3b9357986f2ef46df8ef9d97a0b7e7042fb1fe94af03ff75fea772837f3afa53bf0bdec5f40c9ed5de2d9ede61b9bda33d952fe48f8c14caa537c819ba0bbd619e938b03fce952fed6f2ace38f70aaf2097205dbb68a47de7c977d12751b9c557e5887acbc3dddddeed5e3ff469fbfa971ceede9ff49dbdc8bdf1fd0b8bd6ff5a5f4c69afa97d63f90ae9942c0a303aa22bd99921f1cff3f000000ffff', 
     	gas: '4000000'
    }, function (e, contract){
    	console.log(e, contract);
    	if (typeof contract.address !== 'undefined') {
        	console.log('Contract address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
   	 	}
 	})
	