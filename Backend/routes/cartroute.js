import express from 'express'
import { addtocart,getusercart,updatetocart } from '../controllers/cartcontroller.js'
import authUser from '../middleware/auth.js'

const cartRouter=express.Router()

cartRouter.post('/get',authUser,getusercart)
cartRouter.post('/add',authUser,addtocart)
cartRouter.post('/update',authUser,updatetocart)

export default cartRouter