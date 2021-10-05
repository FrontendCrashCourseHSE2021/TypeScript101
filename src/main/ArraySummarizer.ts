export class ArraySummarizer {

    /**
     * Summarize all elements of the array.
     *
     * @param array Array of numbers.
     *
     * @return Sum of the array items.
     */
    sumArrayItems(array: number[]): number {
        var final_sum = 0
        for (var i = 0; i < array.length; i++) {
            final_sum = final_sum + array[i]
        }
        return final_sum
    }

}
