const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const  incidenceSchema = new Schema({
  title: String,
  description: String,
  catefory: String,
  imageUrl: {
    type: String,
    default: "https://s-media-cache-ak0.pinimg.com/736x/d5/bb/c2/d5bbc24b4c93d4dc2b8100b30581e477.jpg"
  },
  status: {type: String, enum: ["Requested", "Budgeted", "Open", "Resolved","Rated"], default:"Requested"},
  // providerId:{type: Schema.Types.ObjectId, ref: "User"}
  //geolocation??
  //voz: ??????
  userId:{type: Schema.Types.ObjectId, ref: "User"}
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Incidence = mongoose.model("Incidence", incidenceSchema);

module.exports = Incidence;
