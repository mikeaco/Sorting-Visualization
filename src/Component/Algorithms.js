
export const mergeSort = (array, left, right, animate) => {
    if (left < right) {
        let mid = Math.floor((left + (right - 1)) / 2);

        mergeSort(array, left, mid, animate);
        mergeSort(array, mid + 1, right, animate);
        merge(array, left, mid, right, animate);
    }
    return array;
};

function merge(arr, left, mid, right, animate) {
    let range1 = mid - left + 1;
    let range2 = right - mid;

    let L = new Array(range1).fill(0);
    let R = new Array(range2).fill(0);
    for (let i = 0; i < range1; i++) {
        L[i] = arr[left + i];
    }

    for (let j = 0; j < range2; j++) {
        R[j] = arr[mid + 1 + j]
    }
    let x = 0;
    let y = 0;
    let z = left;
    while (x < range1 && y < range2) {
        let comp = [left + x, mid + 1 + y, 0];
        animate.push(comp);
        if (L[x] <= R[y]) {
            let over = [L[x], z, 1];
            animate.push(over);
            arr[z] = L[x];
            x += 1;
        }
        else {
            let over = [R[y], z, 1];
            animate.push(over);
            arr[z] = R[y];
            y += 1;
        }
        z += 1;
    }
    while (x < range1) {
        let over = [L[x], z, 1];
        animate.push(over);
        arr[z] = L[x];
        x += 1;
        z += 1;
    }
    while (y < range2) {
        let over = [R[y], z, 1];
        animate.push(over);
        arr[z] = R[y];
        y += 1;
        z += 1;
    }

}
export const selectionSort = (array, animate) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i; j < array.length; j++) {
            let comp = [minIndex, j, 0];
            animate.push(comp);
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        let swap = [minIndex, i, 1];
        animate.push(swap);
        let temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
    }
    return array;
}
export const quickSort = (array, left, right, animate) => {
    if (left < right) {
        let piv = partition(array, left, right, animate);
        quickSort(array, left, piv - 1, animate);
        quickSort(array, piv + 1, right, animate);

    }
    else if (left === right) {
        let swap = [left, right, 3];
        animate.push(swap);
    }
    
    return array;
}

function partition(array, left, right, animate) {
    let piv = right;
    let part = [piv, 0, 2];
    animate.push(part);
    let i = left - 1;
    for (let j = left; j < right; j++) {
        let track = [i + 1, j, 0];
        animate.push(track);
        if (array[piv] >= array[j]) {
            i++;
            let swap = [i, j, 1];
            animate.push(swap);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }
    }
    i++;
    let swap = [piv, i, 3];
    animate.push(swap);
    let temp = array[piv];
    array[piv] = array[i];
    array[i] = temp;
    piv = i;
    return piv;

}
export const heapSort = (array, animate) => {
    let size = array.length;
    createHeap(array, size, animate);
    for (let i = size - 1; i > 0; i--) {

        let swap = [0, i, 2];
        animate.push(swap);
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        percolateDown(array, i, 0, animate);
    }
    let swap = [0, 0, 2];
    animate.push(swap);
    return array;

}
function createHeap(array, size, animate) {
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        percolateDown(array, size, i, animate);
    }

}
function percolateDown(array, size, root, animate) {
    let max = root;
    let l = 2 * root + 1;
    let r = 2 * root + 2;
    if (l < size) {
        let comp = [l, max, 0];
        animate.push(comp);
    }
    if (l < size && array[l] > array[max])
        max = l;
    if (r < size) {
        let comp = [r, max, 0];
        animate.push(comp);
    }
    if (r < size && array[r] > array[max])
        max = r;
    if (max !== root) {
        
        let swap = [root, max, 1];
        animate.push(swap);
        let temp = array[root];
        array[root] = array[max];
        array[max] = temp;
        percolateDown(array, size, max, animate);
    }
}
