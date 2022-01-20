
//define and export harvestPlants
//This must accept the plants array as input
export const harvestPlants = (plantsArray) => {
    //return an array of seed objects
    let seedObjects = []
    for (const plant of plantsArray) {
        //on each plant get the value of the output property
         for (let i = 0; i< plant.output; i++){
            seedObjects.push(plant)
         }
        //add that many of the plant object to the array 
        //that the function returns
         
    } return seedObjects
}


//iterate the array of growing plants

    
    