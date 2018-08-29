function duplicates(arr) {
    var a=[];
    for(var i=0; i<arr.length; i++)
        for(var j=i+1; j<arr.length; j++){
        arr[i]==arr[j]&&a.indexOf(arr[i])==-1&&a.push(arr[i]);
        }
    return a;
}
//userAgentInfo.indexOf(Agents[v])：
//A.indexOf(array[i]):A元素是否存在于数组array里面；如果存在就会返回对应的下标，如果不存在则返回-1。
