function bubbleSort (arr) {
    function swap (i,j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    var leng = arr.length;
    var swapped = false;
    while(!swapped) {
        swapped = true;
        for(var i=0;i<leng-1;i++) {
            if(arr[i] > arr[i+1]) {
                swap(i,i+1);
                swapped = false;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;