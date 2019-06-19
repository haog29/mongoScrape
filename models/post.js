module.exports = (Schema, model) => {
    const Post = new Schema({
      headline: {
        type: String
      },
      summary: {
        type: String
      },
      url : {
        type : String
      }
      // still thinking if I should add this
      // ,
      // photo : {
      //   type: String
      // }

    })
  
    return model('Post', Post)
  }
  