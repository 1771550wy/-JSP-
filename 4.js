function removeWithoutCopy(arr, item) {
    for (i=0; i<arr.length; i++){
        if(arr[i]==item){
            arr.splice(i,1);
            i--;//考虑数组长度。去掉i个重复元素，数组长度-i 
        }
    }
    return arr;
}
//splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。该方法会改变原始数组。
