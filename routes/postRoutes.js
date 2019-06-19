const { Post } = require('../models')


// Self reminder : handlebars uses render not JSON
module.exports = app => {
    //GET ALL POST
    app.get('/post', (req, res)=> {
        Post.find({})
            .then(posts => res.json(posts))
            .catch(e => console.log(e))
        // Post.find({}, (e, posts)=> {
        //     if (e) throw e

        //     res.json(posts)

        
        })

    app.post('/post', (req, res)=> {
        Post.create(req.body)
        .then(_=> res.sendStatus(200))
        .catch(e => console.log(e))
        // Post.create(req.body, e => {
        //     if (e) throw e
        //     res.sendStatus(200)
        })


        app.put('/post/:id', (req, res) => {
           Post.findByIdAndUpdate(req.params.id, req.body)
            .then(_=> res.sendStatus(200))
            .catch(e => console.log(e))
            //   if (e) throw e
            //   res.sendStatus(200)
            })
          
          app.delete('/post/:id', (req, res) => {
           Post.findByIdAndDelete(req.params.id)
           .then(_=> res.sendStatus(200))
           .catch(e => console.log(e))
            //   if (e) throw e
            //   res.sendStatus(200)
            
          })
        }

        
    


