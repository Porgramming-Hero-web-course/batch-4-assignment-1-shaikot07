
{
    //

    function removeDuplicates(arr: number[]): number[] {
        return Array.from(new Set(arr))
    }

    const test: number[] = [1, 2, 2, 3, 4, 4, 5];
    const result = removeDuplicates(test)
    console.log(result);

    //
}