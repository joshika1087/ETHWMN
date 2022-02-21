(async () => {
    try {
// a random address to send the tokens to
        const ACC_RECEIVER = '0xaaFBc70D3a20Ca41423ef8Df3C87c5A3Dd8327A5'
        const  CONTRACT_ADDR = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8'
        
        console.log('start')
        
        const metadata = JSON.parse(await remix.call('fileManager', 'getFile', 'browser/contracts/artifacts/Owner.json'))
        
        // get the provider from metamask
        const provider = (new ethers.providers.Web3Provider(web3Provider))
        const signer = provider.getSigner()
        let contract = new ethers.Contract(CONTRACT_ADDR, metadata.abi, signer);

        let currentOwner = await contract.getOwner();
        console.log(currentOwner);
        } catch (e) {
                console.log(e.message)
            }
})()
