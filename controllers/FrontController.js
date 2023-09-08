const BlogModel = require('../models/Blog')
const CategoryModel = require('../models/Category')
const AboutModel = require('../models/about')

class FrontController {
    static home = async (req, res) => {
        try {
            const blogs = await BlogModel.find().sort({_id:-1}).limit(6)
            res.render('home', { b: blogs })
        } catch (error) {
            console.log(error)
        }
    }
    static about = async (req, res) => {
        try{
            const about = await AboutModel.findOne()
            res.render('about',{a:about})
        }
        catch(error){
            console.log(error)
        }
    }
    static contact = (req, res) => {
        res.render('contact')
    }
    static login = (req, res) => {
        res.render('login')
    }
    static blog = (req, res) => {
        res.render('blog')
    }
    static blogDetail = async (req, res) => {
        try {
            const detail = await BlogModel.findById(req.params.id)
            const recentblogs = await BlogModel.find().limit(6)
            const category = await CategoryModel.find()
            res.render('blog-details', { d: detail, r: recentblogs, c: category })
        }
        catch (error) {
            console.log(error)
        }
    }
}
module.exports = FrontController