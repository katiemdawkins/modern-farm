//create Catalog function w/ harvestArray as parameter
let templateString = ""

export const Catalog = (harvestArray) => {
    //iterate the array of food objects
    
    for (const plant of harvestArray) {
        //<main> append inner HTML
        templateString += `<section class="plant">${plant.type}</section>`
            
        
    }
}
const ladeedaa = document.querySelector("#container")

.innerHTML += templateString