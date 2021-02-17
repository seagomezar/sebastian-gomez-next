// pages/api/comment/index.js
import nc from 'next-connect'
import comments from '../../../data/data'

const handler = nc()
  .get((req, res) => {
    res.json({data: comments})
  })
  .post((req, res) => {
    const id = Date.now()
    const comment = {...req.body, id}

    comments.push(comment)
    res.json({data: comment})
  })
export default handler