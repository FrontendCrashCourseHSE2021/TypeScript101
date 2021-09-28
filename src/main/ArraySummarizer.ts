export class ArraySummarizer {

    /**
     * Summarize all elements of the array.
     *
     * @param array Array of numbers.
     *
     * @return Sum of the array items.
     */
    sumArrayItems(array: number[]): number {
        let sum = 0;
        for (let i = 0; i < array.length; i += 1){
            sum += array[i];
        }
        return sum;
    }

}
