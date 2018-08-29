
function findAllOccurrences(arr, target) {
    var arr1=[];
    for(i=0; i<arr.length; i++){
        if(target==arr[i]){
           arr1.push(i); 
        }
    }
    return arr1;   
}
