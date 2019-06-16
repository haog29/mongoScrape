const { Post } = require('../models')

module.exports = app => {
    //GET ALL POST
    app.get('/post', (req, res)=> {
        Post.find({}, (e, posts)=> {
            if (e) throw e

            res.json(posts)
        })
    })

    app.post('/post', (req, res)=> {
        Post.create(req.body, e => {
            if (e) throw e
            res.sendStatus(200)
        })
    })
}

