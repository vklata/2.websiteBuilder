import express from "express"

import isAuth from "../middlewares/isAuth.js"
import { billing } from "../controllers/billing.controller.js"


const billingRouter=express.Router()

billingRouter.post("/billing",isAuth,billing)


export default billingRouter