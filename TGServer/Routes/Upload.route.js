const express = require("express");
const router = express.Router();
const { ipfsClient, saveText } = require('../Web3_Storage/web3_storage')


router.post("/uploadIpfs", async (req, res) => {

let data = {
  name: "Dhruv",
  age: "31"
}

let result = await saveText(data)

console.log(result)

res.status(200).json({
  imp : result.cid.toString()
})

});


router.get("/getFilesIpfs", async (req, res) => {

 
  let cid = req.query.cid

  async function getData(cid) {
    let ipfs = await ipfsClient();
    let asyncitr = ipfs.cat(cid)

    for await (const itr of asyncitr){
      let data = Buffer.from(itr).toString()
      let jsonData = JSON.parse(data)
      console.log(jsonData)
      res.status(400).json(jsonData)
    }
  }

  getData(cid)

});

module.exports = router;
