const BlogModel = require('../../models/Blog')
var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dsnbuq6as',
    api_key: '418239745438181',
    api_secret: 'IjQ6X-KTMTq5YQETNTH1ljB2KU0',
    secure: true
})

class BlogController {
    static display = async (req, res) => {
        try {
            const data = await BlogModel.find()
            console.log(data)
            res.render('admin/blog/display', { d: data })
        } catch (error) {
            console.log(error)
        }
    }
    static insertblog = async (req, res) => {
        try {
            //  console.log(req.files.image)
            const file = req.files.image
            const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: 'blogImage'
            })
            // console.log(myimage)
            const result = new BlogModel({
                title: req.body.title,
                description: req.body.description,
                image: {
                    public_id: myimage.public_id,
                    url: myimage.secure_url
                }
            })
            // const result = new BlogModel({
            //     title:req.body.title,
            //     description:req.body.description
            // })
            // await result.save()
            // // console.log(result)
            // // /admin/blogdisplay this is for route
            // res.redirect('/display')
            await result.save()
            res.redirect('/display')

        } catch (error) {
            console.log(error)
        }
    }
    static blogview = async (req, res) => {
        try {
            // console.log(req.params.id)
            const result = await BlogModel.findById(req.params.id)
            // console.log(result)
            res.render('admin/blog/view', { view: result })
        } catch (error) {
            console.log(error)
        }
    }
    static blogedit = async (req, res) => {
        try {
            // console.log(req.params.id)
            const result = await BlogModel.findById(req.params.id)
            // console.log(result)
            res.render('admin/blog/edit', { edit: result })
        } catch (error) {
            console.log(error)
        }
    }
    static blogupdate = async (req, res) => {
        try {
            // console.log(req.body)
            // console.log(req.params.id)
            // first delete image
            const blog = await BlogModel.findById(req.params.id)
            const imageid = blog.image.public_id
            await cloudinary.uploader.destroy(imageid)
            //second update image
            const file = req.files.image
            const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: 'blogImage'
            })

            const update = await BlogModel.findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                description: req.body.description,
                image: {
                    public_id: myimage.public_id,
                    url: myimage.secure_url
                }
            })
            await update.save()
            res.redirect('/display')
        }
        catch (error) {
            console.log(error)
        }
    }
    static blogDelete = async (req, res) => {
        try {
            //server image delete code
            const blog = await BlogModel.findById(req.params.id)
            const imageid = blog.image.public_id
            await cloudinary.uploader.destroy(imageid)

            await BlogModel.findByIdAndDelete(req.params.id)
            res.redirect('/display')
        }
        catch (error) {
            console.log(error)
        }
    }
}


module.exports = BlogController