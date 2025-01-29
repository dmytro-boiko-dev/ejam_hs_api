import {Request, Response} from "express";
import {Hero} from "../models/hero.model.ts";
import heroes from "../database.ts";

let nextId = 1;

export const createHero = (req: Request, res: Response): void => {
    const {name, superpower, humilityScore} = req.body;

    // check input
    if (!name || !superpower || typeof humilityScore !== "number" || humilityScore < 1 || humilityScore > 10) {
        res.status(400).json({message: "Invalid hero data"});
        return;
    }

    // create hero
    const newHero: Hero = {id: nextId++, name, superpower, humilityScore};
    heroes.push(newHero);
    res.status(201).json(newHero);
};

export const getHeroes = (req: Request, res: Response): void => {
    const sortedHeroes = [...heroes].sort((a, b) => a.humilityScore - b.humilityScore);
    res.json(sortedHeroes);
};
