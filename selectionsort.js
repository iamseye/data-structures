
// Time: O(n^2)
// space: O(1) for swapping the smallest element to the front of unsorted sub-array
function selectionSort(array) {
    const newArray = [];

    while(array.length) {
        const smallestIndex = findSmallestIndex(array);
        newArray.push(array[smallestIndex]);
        array.splice(smallestIndex, 1);
    }
    return newArray;
}

function findSmallestIndex(array) {
    let min = array[0];
    let minIndex = 0;

    for(let i =0; i<array.length;i++) {
        if(array[i]<min) {
            min = array[i];
            minIndex = i;
        }
    }

    return minIndex;
}