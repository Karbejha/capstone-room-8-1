const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");


router.get('/getRestaurant', adminController.getRestaurant);
router.post("/addNewRestaurant", adminController.addNewRestaurant);

// router.put("/admin/item/:id", adminController.updateItem);

// router.delete("/admin/item/:id", adminController.deleteItem);

// router.get("/admin/item/search", adminController.searchItem);

module.exports = router;