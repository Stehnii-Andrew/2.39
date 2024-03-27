import express from "express";
import addNotise from "../ctrl/controller.js";
import { parseNotice } from "../ctrl/controller.js";
const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('CONNECTED');
  res.render('index' );
  
});

router.post('/', async (req, res, next) => {
  addNotise(req.body);
  const result = await parseNotice();
  res.json({result});
});


export default router;
