var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, p, r) {
    var q = p;
    for (var j = p; j < r; j++) {
        if (array[j] <= array[r]) {
            swap(array, j, q++);
        }
    }
    swap(array, r, q);
    return q;
};

var quickSort = function(array, p, r) {
    if(p < r) {
        var pivot = partition(array, p, r);
        quickSort(array, p, pivot - 1);
        quickSort(array, pivot + 1, r);
    }
};