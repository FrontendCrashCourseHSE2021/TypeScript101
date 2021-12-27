export class ArraySummarizer {

    /**
     * Summarize all elements of the array.
     *
     * @param array Array of numbers.
     *
     * @return Sum of the array items.
     */
    sumArrayItems(array: number[]): number {
        // throw new Error("Not implemented!");
        var result = 0;
        for (var i = 0; i < array.length; i++){
            result += array[i];
        }
        return result;
    }

}
