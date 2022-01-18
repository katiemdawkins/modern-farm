console.log("Welcome to the main module")

import { createPlan } from './plan.js';

const yearlyPlan = createPlan()
console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

import { createCorn } from './seeds/corn.js'

const cornSeed = createCorn()
console.log(cornSeed)

import { addPlant } from "./field.js"

import { usePlants } from "./field.js"

const seedObject = {
    type: "seed Object",
    height: 99,
    output: 6
}

let addingPlant = addPlant(seedObject)
console.log(addingPlant)

let usingPlants = usePlants()
console.log(usingPlants)

import { plantSeeds } from './tractor.js';

let plantingSeeds = plantSeeds()
console.log(plantingSeeds)
