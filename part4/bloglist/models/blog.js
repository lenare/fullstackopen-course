const config = require('../utils/config')
const logger = require('../utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)


logger.info('connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)

  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch(error => {
    logger.error('error connecting to MongoDB:', error.message)
  })

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
  })

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
  }
})

module.exports = mongoose.model('Blog', blogSchema)
