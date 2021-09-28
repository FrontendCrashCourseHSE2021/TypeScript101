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
        array.forEach(function (value) {
            sum += value;
        });
        return sum;
    };


}
