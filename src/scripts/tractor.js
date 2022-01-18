import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"

//define and export plantSeeds function
export const plantSeeds = (plantingPlan) => {
    for (const plan in plantingPlan) {
        for (const type in plan) {
            if(type === "Asparagus"){
                createAsparagus()
            } else if (type === "Corn"){
                createCorn()
            } else if (type === "Potato"){
                createPotato()
            } else if (type === "Soybean"){
                createSoybean()
            } else if (type === "Sunflower"){
                createSunflower()
            } else if (type === "wheat") {
                createWheat()
            }
        } addPlant(seedObject)
    }
}

const plantingPlan = [
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]
//must accept the year's planting plan as input
// the plan = an array containing 4 arrays
// iterate both parent array and child arrays 
// as you iterate row of food types to be planted invoke
// a factory function (if Asparagus invoke createAsparagus)
//take that see and add to the array of plants in the field module
