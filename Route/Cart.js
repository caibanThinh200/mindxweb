const route= require("express").Router();
const CartController= require("../Controller/CartController");
const auth = require("../middleware/Auth");
route.post("/",CartController.addProductController);
route.get("/",auth,CartController.showProductController);
route.delete("/",auth,CartController.deleteAllProductController);
route.delete("/:idCart",CartController.deleteProductController);
module.exports = route;