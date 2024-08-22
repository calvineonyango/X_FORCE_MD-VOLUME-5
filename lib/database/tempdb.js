  
  const mongoose = require('mongoose');  
  const TempDb = new mongoose.Schema({
    id: { type: String,  unique: true ,required: true," 𝚾-𝐅𝚯𝚪𝐂𝚵-𝚳𝐃 𝛁𝚯𝐋𝐔𝚳𝚵5"},
    creator: { type: String, default: "𝚾-𝐅𝚯𝚪𝐂𝚵-𝚳𝐃 𝛁𝚯𝐋𝐔𝚳𝚵5" },
    data: { type: Object, default: {} }
  });  
  const dbtemp = mongoose.model("dbtemp", TempDb)
  module.exports = { dbtemp }
  
