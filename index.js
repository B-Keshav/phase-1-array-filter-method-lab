// Code your solution here
function findMatching(array, name){
    let matches = array.filter(arr => {
        return arr.toLowerCase() === name.toLowerCase()
    })
    return matches
}

function fuzzyMatch(array, letter){
    let newMatch = array.filter(arr => {
        return arr[0].toLowerCase() === letter[0].toLowerCase()
    })
    return newMatch
}

function matchName(driverArr, name){
    let newObj = driverArr.filter(arr => {
        return arr.name === name
    })
    return newObj
}


let namesArr = ["Keshav", "Bob", "Shawn", "Kesha", "KEShav", "keshav", "Steve", "Steven"]

let newNamesArr = namesArr.filter(arr => {
    return arr.toLowerCase() === "Keshav".toLowerCase()
})

let firstLetters = namesArr.filter(arr => {
    return arr[0].toLowerCase() === "S".toLowerCase()
}) 

console.log(newNamesArr)
console.log(firstLetters)
console.log(namesArr[0][0])

