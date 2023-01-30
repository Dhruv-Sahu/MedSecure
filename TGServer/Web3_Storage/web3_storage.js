const { create } = require("ipfs-http-client");

const projectId = "2L0nyYToX2vgwgImNSZ3pPB8ziP";
const projectSecret = "202a88c0a9705bbe3b987bfbbdd37b1c";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

async function ipfsClient() {
  const ipfs = await create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });
  return ipfs;
}

async function saveText(data) {
  let ipfs = await ipfsClient();

  let options = {
    warpWithDirectory: true,
    progress: (prog) => {
      console.log(`Saved :${prog} `);
    },
  };

  let result = await ipfs.add(
    {
      path: "shu.json",
      content: JSON.stringify(data),
    },
    options
  );
  console.log(result)
  return result;
}

module.exports = {
  ipfsClient,
  saveText,
};
