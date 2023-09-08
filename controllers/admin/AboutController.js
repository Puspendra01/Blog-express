const AboutModel = require("../../models/about")

class AboutController{

    static aboutDisplay = (req, res) => {
        res.render('admin/blog/about')
    }
    // static aboutDisplay = async (req, res) =>{
    //     try {
    //         const result = await AboutModel.findOne()
    //         res.render('admin/about',{a:result})
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
}


module.exports = AboutController