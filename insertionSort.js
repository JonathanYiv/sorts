var insert = function(array, rightIndex, value) {
    for(var i = rightIndex; i > -1 && value < array[i]; i--) {
        array[i + 1] = array[i];   
    }
    array[i + 1] = value;
};

var insertionSort = function(array) {
    for(var i = 1; i < array.length; i++) {
        insert(array, i - 1, array[i]); 
    }
};