import mongoose from "mongoose"
const Schema = mongoose.Schema;


const NinjaSchema = new Schema({
    name: { type: String, },
    rank: { type: String, default: 0 },
    available: { type: Boolean, default: false }
})

const NinjaModel = mongoose.model('ninja', NinjaSchema)

export default NinjaModel;