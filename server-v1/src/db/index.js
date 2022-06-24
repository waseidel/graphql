import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const {
  MONGODB_URI,
  MONGODB_DB,
  MONGODB_USER,
  MONGODB_PASSWORD,
} = process.env


const connstr = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URI}/${MONGODB_DB}?retryWrites=true&w=majority`

try {
  mongoose.connect(connstr, options)
  console.log(`🔌 Connected to MongoDB`)

} catch (error) {
  console.error(error.message)

}