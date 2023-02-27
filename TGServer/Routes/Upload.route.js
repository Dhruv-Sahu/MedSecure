const express = require("express");
const router = express.Router();
const { ipfsClient, saveText } = require('../Web3_Storage/web3_storage')

const CidModel = require('../Models/cidStorage')


router.post("/uploadIpfs", async (req, res) => {

console.log(req.body)
let result = await saveText(req.body)

try{

  const data = {
    cid: result.cid.toString(),
    address : req.body.title
  }
  const dbRes = await CidModel.findByIdAndUpdate({_id:"63e79afa420232c28e9779d1"}, {$push: { cids : data}})

  console.log(dbRes)
}catch(err){
  console.log(err)
}
// console.log(result)

res.status(200).json({
  imp : result.cid.toString(),
  message : "success"
})

});




router.get("/getFilesIpfs", async (req, res) => {

  // let cid = req.query.cid

  const dbRes = await CidModel.findById({_id:"63e79afa420232c28e9779d1"})
  const cidRes = dbRes.cids
  let ipfsData = []


  // const friends = await Promise.all(
  //   user.followings.map(async(friend)=>{
  //       friend = await User.findById(friend);
  //       const {createdAt, updatedAt, password, refreshToken, ...restElements } = friend._doc
  //       return restElements;    
  //   })
  //   )


  async function getData(cid) {
    let ipfs = await ipfsClient();
    let asyncitr = ipfs.cat(cid)

    for await (const itr of asyncitr){
      let data = Buffer.from(itr).toString()
      let jsonData = JSON.parse(data)
      // console.log(jsonData)
      // ipfsData.push(jsonData)
      return jsonData
    }
  }

  ipfsData = await Promise.all(
    cidRes.map(async(ele)=>{
      let info = await getData(ele.cid)
      return {...info, cid:ele}
    })
  )

  console.log(ipfsData)
  res.status(200).json(ipfsData)

});













router.get('/getAIpfs', async(req, res)=>{


  let cid = req.query.cid

  async function getData(cid) {
    let ipfs = await ipfsClient();
    let asyncitr = ipfs.cat(cid)

    for await (const itr of asyncitr){
      let data = Buffer.from(itr).toString()
      let jsonData = JSON.parse(data)
      // console.log(jsonData)
      // ipfsData.push(jsonData)
      return jsonData
    }
  }

  let data = await getData(cid)
  res.status(200).json(data)
})




module.exports = router;
