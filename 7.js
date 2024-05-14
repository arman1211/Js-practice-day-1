var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var tmparr = []

tmp = numbers[0]
tmparr.push(tmp)

numbers.forEach(num=>{
    if(tmp!=num){
        tmparr.push(num)
        tmp=num
    }
})
console.log(tmparr)