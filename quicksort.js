// time: O(nlongn)
// space: O(n)
function quickSort(array) {
    if(!array.length) {
        return [];
    }

    const pivotIndex = Math.floor(array.length/2);
    const pivot = array[pivotIndex];

    let left = [];
    let right = [];

    for (let i = 0; i<array.length ; i++) {
        if(i === pivotIndex) {
            continue;
        }
        const item = array[i];

        if(item < pivot) {
            left.push(item);
        } else {
            right.push(item);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
