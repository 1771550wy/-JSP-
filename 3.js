function remove(arr, item) {
    var newarr=[];
    for (i=0; i<arr.length; i++){
        if(arr[i]!=item){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
