module.exports = (Schema, model) => {
    const Post = new Schema({
      title: {
        type: String
      },
      body: {
        type: String
      }
    })
  
    return model('Post', Post)
  }
  