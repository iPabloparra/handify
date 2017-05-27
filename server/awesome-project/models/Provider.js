const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const  providerSchema = new Schema({
  username: {type:String, required:true},
  password: {type:String, required:true},
  name: String,
  surname: String,
  enterprise: String,
  occupation: [],
  email: String,
  phoneNumber: Number,
  imageUrl: {
    type: String,
    default: "https://s-media-cache-ak0.pinimg.com/736x/d5/bb/c2/d5bbc24b4c93d4dc2b8100b30581e477.jpg"
  },
  rating: Number,
  reviews: String,
  disponibilidad: Boolean,
  provider_position:{lat:Number,lng:Number},
  urgencies: Boolean,
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }

});

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;
