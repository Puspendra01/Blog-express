const express = require('express')
const router = express.Router()
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/admin/AdminController')
const BlogController = require('../controllers/admin/BlogController')
const CategoryController = require('../controllers/admin/CategoryController')
const AboutController = require('../controllers/admin/AboutController')

//FrontController

router.get('/',FrontController.home)
router.get('/about',FrontController.about)
router.get('/contact',FrontController.contact)
router.get('/login',FrontController.login)
router.get('/blog',FrontController.blog)
router.get('/blog-details/:id',FrontController.blogDetail)

//AdminController
router.get('/dashboard',AdminController.dashboard)

//BlogController
router.get('/display',BlogController.display)
router.post('/insertblog',BlogController.insertblog)
router.get('/blogview/:id',BlogController.blogview)
router.get('/blogedit/:id',BlogController.blogedit)
router.post('/blogupdate/:id',BlogController.blogupdate)
router.get('/blogdelete/:id',BlogController.blogDelete)

//CategoryController
router.get('/category',CategoryController.category)

//AboutController
router.get('/admin/about',AboutController.aboutDisplay)






module.exports = router