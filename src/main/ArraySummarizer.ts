export class ArraySummarizer {

    /**
     * Summarize all elements of the array.
     *
     * @param array Array of numbers.
     *
     * @return Sum of the array items.
     */
    sumArrayItems(array: number[]): number {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

}
