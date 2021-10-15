// Code your solution here


function findMatching(collection, name){
 
    return collection.filter(driver => {
        return driver.toLowerCase()=== name.toLowerCase()})
    }
    
    // return !!thisDriver ? thisDriver : undefined


function fuzzyMatch(collection, partName){
    let partial = collection.filter(driver => driver.slice(0, partName.length) === partName)
    return !!partial ? partial : undefined
}

// function matchName(collection){
//     let nameCheck = collection.filter(driver => driver.name === collection.driver.name)
//     return nameCheck
// }
function matchName(collection, name){
 
    return collection.filter(driver => {
        return driver.name.toLowerCase()=== name.toLowerCase()})
    }
   