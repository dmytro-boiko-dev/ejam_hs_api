import {Router, RequestHandler} from "express";
import {createHero, getHeroes} from "../controllers/hero.controller.ts";

const router = Router();

router.post("/superheroes", createHero as RequestHandler);
router.get("/superheroes", getHeroes as RequestHandler);

export default router;
