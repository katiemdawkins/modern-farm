//define variable whose value = [empty array]
//this will store all the plants growing in the field
//do not export this array
const allOfThePlants = []

// define and export function called addPlant
    //must accept seed object as input
    //add the seed to the empty array .push()
export const addPlant = (seedObject) => {
    allOfThePlants.push(seedObject)
}

//define and export a function named usePlants
//this returns a copy of the array of plants
export const usePlants = () => {
    let newAllOfThePlants = allOfThePlants
    return newAllOfThePlants
}