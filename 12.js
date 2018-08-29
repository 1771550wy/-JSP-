function duplicates(arr) {
    var a=[];
    for(var i=0; i<arr.length; i++)
        for(var j=i+1; j<arr.length; j++){
        arr[i]==arr[j]&&a.indexOf(arr[i])==-1&&a.push(arr[i]);
        }
    return a;
}
