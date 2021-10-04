export class ArraySummarizer {

    /**
     * Summarize all elements of the array.
     *
     * @param array Array of numbers.
     *
     * @return Sum of the array items.
     */

    //нужно сложить все элементы массива и получить число и вернуть его (внутри будет цикл и переменная которая накапливает значения
    sumArrayItems(array: number[]): number {
        var sum= 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i]
        }
        //чтото надо написать

        return sum;
    }

}
