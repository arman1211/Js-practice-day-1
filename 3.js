let arr = [15, 3, 12, 8, 20, 1, 14, 7, 19, 2, 10, 18, 5, 6, 13, 9, 4, 16, 11, 17]

for(i=0;i<arr.length-1;i++){
    for(j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            tmp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=tmp;
        }
    }
}
console.log(arr)