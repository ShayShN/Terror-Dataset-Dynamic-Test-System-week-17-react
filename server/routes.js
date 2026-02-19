import express from "express"
import { getAllData } from "./read.js"



const router = express.Router()

router.get("/getdata", getAllData )

export default router