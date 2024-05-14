var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];



tmp = numbers[0]


numbers.forEach(num=>{
    if(tmp<num){
        
        tmp=num
    }
})
console.log(tmp)