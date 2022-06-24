import mongoose from "mongoose";

const jerarquiaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  state: {
    type: Boolean,
    default: true
  },
  afectaOp: {
    type: Boolean,
    default: false,
    required: true
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Jerarquia",
    required: false
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jerarquia",
      required: false
    }
  ]
}, { timestamps: true });

export default mongoose.model('Jerarquia', jerarquiaSchema)
