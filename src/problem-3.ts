{
    //

    function countWordOccurrences(sentence: string, word: string): number {
        const lowerSentence = sentence.toLocaleLowerCase();
        const lowerWord = word.toLocaleLowerCase();
        const words = lowerSentence.split(' ')

        const wordCount = words.filter(wor => wor === lowerWord).length;

        return wordCount
    }


    const result=countWordOccurrences("I love typescript typescript typescript", "typescript")
    // console.log(result);

    //
}