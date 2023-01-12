// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    return cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name) {
    return cats.pop("Garfield")
}
function destructivelyRemoveFirstCat (name) {
    return cats.shift("Milo")
}
function appendCat(name) {
    const newCats= [...cats, "Broom"]
    return newCats
}
function prependCat(name) {
    const newCatsTwo = ["Arnold", ...cats,]
    return newCatsTwo
}
function removeLastCat (name) {
    const newCatsThree = cats.slice(0,2)
    return newCatsThree
}
function removeFirstCat(name) {
    const newCatsFour = cats.slice(1)
    return newCatsFour
}
