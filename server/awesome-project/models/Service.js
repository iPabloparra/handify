const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const  serviceSchema = new Schema({
  price: {type:Number, required:true},
  userId: {type: Schema.Types.ObjectId, ref: "User"},
  incidenceId: {type: Schema.Types.ObjectId, ref: "Incidence"},
  status: {type: String, enum: ["Budgeted", "Accepted", "Rejected", "Done", "Rated"], default:"Budgeted"},
},{
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }

});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
