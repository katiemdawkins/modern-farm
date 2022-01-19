import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"

// the plan = an array containing 4 arrays
// Example plan const plantingPlan = [
//     ["Potato", "Soybean", "Soybean", "Corn"],
//     ["Wheat", "Corn", "Wheat", "Asparagus"],
//     ["Asparagus", "Wheat", "Soybean", "Corn"],
//     ["Asparagus", "Soybean", "Potato", "Wheat"]
// ]


//define and export plantSeeds function
//must accept the year's planting plan as input
export const plantSeeds = (plantingPlan) => {
    // iterate both parent array and child arrays 
    for (const plan in plantingPlan) {
        for (const foodType in plan) {
            //as you iterate row of food types to be planted invoke
            //a factory function (if Asparagus invoke createAsparagus)
            if (foodType === "Asparagus") {
                const asparagusSeed = createAsparagus()
                return asparagusSeed
            } else if (foodType === "Corn") {
                const cornSeed = createCorn()
                return cornSeed
            } else if (foodType === "Potato") {
                const potatoSeed = createPotato()
                return potatoSeed
            } else if (foodType === "Soybean") {
                const soybeanSeed = createSoybean()
                return soybeanSeed
            } else if (foodType === "Sunflower"){
                const sunflowerSeed = createSunflower()
                return sunflowerSeed
            } else if (foodType === "Wheat") {
                const wheatSeed = createWheat()
                return wheatSeed
            } const seed = addPlant()
              return seed
        //take that seed and add to the array of plants in the field module
        } 
    }  
}








