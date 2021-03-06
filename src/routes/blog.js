const express = require('express')
const router = express.Router()
const BlogController = require('../app/controllers/BlogController')
const verifyToken = require('../middleware/verifyToken')

router.get('/:slug', BlogController.getBlog)
router.get('/tag/:tag', BlogController.getBlogTag)
router.get('/edit-blog/:slug', BlogController.getBlog)
router.put('/edit-blog/:slug', verifyToken, BlogController.editBlog)
router.put('/like', verifyToken, BlogController.like)
router.put('/comment', verifyToken, BlogController.comment)
router.put('/comment/reply', verifyToken, BlogController.replyComment)
router.post('/comment/get-reply', verifyToken, BlogController.getReplyComment)
router.put('/comment/react', verifyToken, BlogController.reactComment)
router.put('/comment/edit', verifyToken, BlogController.editComment)
router.get('/:blogId/:authorId', BlogController.getBlogSameAuthor)
router.post('/add-popular', BlogController.addPopular)
router.get('/', BlogController.getAllBlog)
router.post('/', verifyToken, BlogController.postNewBlog)
router.get('/', BlogController.getAllBlog)

module.exports = router
