import { Router } from "express";
import * as catService from "./cat.service";

const router = Router();
router.get("/cat", catService.readCat);
router.get("/cat/:id", catService.readCatById);
router.post("/cat", catService.createCat);
router.put("/cat/:id", catService.updateCat);
router.delete("/cat/:id", catService.deleteCat);

export default router;
