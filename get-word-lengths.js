const getWordLengths = function (someWords) {
    const updatedArray = []
    someWords.forEach(function (word) {
        const wordLength = word.length
        updatedArray.push(wordLength)
    })
    return updatedArray
};

module.exports = getWordLengths;