const uuid = require("uuid");
const  querryBuilder = require("../config/databse");
const querry = require("../config/databse");
class CategoryService{
    static async addCategoryService(req,res,next){
        try{
            let data = req.body;
            let insertData = {
                idCategory:uuid.v4(),
                nameCategory:data.name
            }
            await querry("FoodCategory").insert(insertData);
            return "Category added"
        }catch(e){
            console.log(e);
        }
    }
    static async showCategoryService(req,res,next){
        try{
            let data = await querryBuilder("foodcategory").select();
            return data;
        }catch(e){
            console.log(e);
        }
    }
}
module.exports = CategoryService;