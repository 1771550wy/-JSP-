function count(arr, item) {
    var j=0;
    for(i=0; i<arr.length; i++)
        if(arr[i]==item){
            j++;
        }
    return j;
}
