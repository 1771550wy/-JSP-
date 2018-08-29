function remove(arr, item) {
    var newarr=[];
    for (i=0; i<arr.length; i++){
        if(arr[i]!=item){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
//push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
