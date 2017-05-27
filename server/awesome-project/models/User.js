const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const  userSchema = new Schema({
  username: {type:String, required:true},
  password: {type:String, required:true},
  name: String,
  email: String,
  phoneNumber: Number,
  provider: {type: Boolean, default: false},
  imageUrl: {
    type: String,
    default: "https://s-media-cache-ak0.pinimg.com/736x/d5/bb/c2/d5bbc24b4c93d4dc2b8100b30581e477.jpg"
  },
  friends:[],
  folowed:[],
  userPosition:{lat:Number,lng:Number},
  occupations:[],
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
