const findNeedle = function (words) {
    function isNeedle(element) {
        return element == "needle"
    }
    return indexNumber = words.findIndex(isNeedle)
}
module.exports = findNeedle;