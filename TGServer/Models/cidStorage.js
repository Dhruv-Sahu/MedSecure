const mongoose = require("mongoose");

const CidSchema = new mongoose.Schema(
    { 
        cids:{
            type: Array,
            default: []
        }
    },  
    {
      timestamps: true,
    }
  );
  
  const CidModel = mongoose.model("cid", CidSchema);
  module.exports = CidModel;