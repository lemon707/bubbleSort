function bubbleSort (arr) {

    var swapped = true;

    function swap(a,b) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    while(swapped) {
        
        swapped = false;

        var length = arr.length;

        for(var i = 0; i < length - 1; i += 1) {

            if(arr[i] > arr[i + 1]) {
                swap(i, i + 1);
                swapped = true;
            }

        }
    }

    return arr;

}

module.exports = bubbleSort;