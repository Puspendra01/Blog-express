const CategoryModel = require('../../models/Category')
class CategoryController {

    static category = (req, res) => {
        res.render('admin/blog/category')
    }
}

module.exports = CategoryController