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
//this is pushing the seed object into allOfThePlants array
let addingPlant = addPlant(seedObject)
console.log(addingPlant)

//this is printing the newAllOfThePlants array
//with the seedObject
let usingPlants = usePlants()
console.log(usingPlants) 


import { plantSeeds } from './tractor.js';

//invoke plantSeeds() function that plants all the seeds
let plantingSeeds = plantSeeds()
console.log(plantingSeeds)

//get plants array from fields.js (newAllOfThePlants)
let plantsArray = usePlants()
//console.log() to see if plants array has been populated correctly
console.log(plantsArray)