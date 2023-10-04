const express = require('express');
const router = express.Router();


const bookcontroller = require("../Controllers/book-controller");

router.get("/",bookcontroller.getAllBooks);
router.post("/",bookcontroller.addbook);
router.get("/:id",bookcontroller.getById);
router.put("/:id",bookcontroller.UpdateBook);
router.delete("/:id",bookcontroller.DeleteBook);
module.exports = router;