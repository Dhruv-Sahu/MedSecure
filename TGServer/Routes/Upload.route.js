const express = require("express");
const router = express.Router();
const { ipfsClient, saveText } = require('../Web3_Storage/web3_storage')
const sendEmail = require("../functions/sendMail");

const CidModel = require('../Models/cidStorage')
const User = require('../Models/User.model')


router.post("/uploadIpfs", async (req, res) => {

console.log(req.body)
let result = await saveText(req.body)

try{

  const data = {
    cid: result.cid.toString(),
    address : req.body.title
  }
  const dbRes = await CidModel.findByIdAndUpdate({_id:"6451d8e1c58c566c52107f0c"}, {$push: { cids : data}})

  console.log(dbRes)
}catch(err){
  console.log(err)
}
// console.log(result)

let regulatoryBodyMail = "anishkhot.gaming@gmail.com"
let expirationTime = Date.now() + (number * 24 * 60 * 60 * 1000 )
let linkGenerated = `http://localhost:3000/tempNFT?cid=${result.cid.toString()}&time=${expirationTime}`

let Subject = "Please Verify The Data, Click the link to access the data"
let body =  `Link : ${linkGenerated}`

let mailResponse = await sendEmail(regulatoryBodyMail,Subject,body)


res.status(200).json({
  imp : result.cid.toString(),
  message : "success"
})

});




router.get("/getFilesIpfs", async (req, res) => {

  // let cid = req.query.cid

  const dbRes = await CidModel.findById({_id:"6451d8e1c58c566c52107f0c"})
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
      let info = await getData(ele?.cid)
      return {...info, cid:ele}
    })
  )

  console.log(ipfsData)
  res.status(200).json(ipfsData)

});



//GETTING THE DATA FROM THE BACKEND SERVER
router.get("/transaction", async(req,res)=>{
  const id = req.query.id
  console.log(id)
  let ipfsData = []


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

  try {
    const dbRes = await User.findById(id,'transaction')
    const ipfsCid = dbRes.transaction

    ipfsData = await Promise.all(
      ipfsCid.map(async(ele)=>{
        let info = await getData(ele.cid)
        return {...info, cid:ele}
      })
    )
    // RETURNING THE ARRAY OF 
    res.status(200).json(ipfsData)

  } catch (error) {
    res.json(error)
  }
})












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
