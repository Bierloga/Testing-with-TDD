const addOne = function (numbers) {
    const updatedArray = []
    numbers.forEach(function (number) {
        const updatedNumber = number + 1
        updatedArray.push(updatedNumber)
    })
    return updatedArray
}
module.exports = addOne;