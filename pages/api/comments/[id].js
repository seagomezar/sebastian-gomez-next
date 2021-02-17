// pages/api/comment/[id].js
import nc from 'next-connect'
import comments from '../../../data/data'

const getcomment = id => comments.find(n => n.id === parseInt(id))

const handler = nc()
  .get((req, res) => {
    
    const comment = getcomment(req.query.id)

    if (!comment) {
      res.status(404)
      res.end()
      return
    }

    res.json({data: comment})
  })
  .patch((req, res) => {
    const comment = getcomment(req.query.id)

    if (!comment) {
      res.status(404)
      res.end()
      return
    }
    
    const i = comments.findIndex(n => n.id === parseInt(req.query.id))
    const updated = {...comment, ...req.body}

    comments[i] = updated
    res.json({data: updated})
  })
  .delete((req, res) => {
    const comment = getcomment(req.query.id)

    if (!comment) {
      res.status(404)
      res.end()
      return
    }
    const i = comments.findIndex(n => n.id === parseInt(req.query.id))
    
    comments.splice(i, 1)

    res.json({data: req.query.id})
  })
  

export default handler