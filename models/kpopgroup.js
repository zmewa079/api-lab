import mongoose from 'mongoose'
const Schema = mongoose.Schema

const kpopgroupSchema = new Schema({
  name: String,
  debut: Number,
  members: Number
})
const Kpopgroup = mongoose.model('Kpopgroup', kpopgroupSchema)

export {
  Kpopgroup
}