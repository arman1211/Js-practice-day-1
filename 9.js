const savings = (arr,cost)=>{
    if ((typeof arr) != "object"){
        console.log("Invalid input")
        return

    }
    sum = 0;
    arr.forEach(num => {
        if(num>=3000){
            num = num - (num*0.2);
            sum+=num;
        }
        else sum+=num;


    });
    res = sum-cost;
    if(res>=0){
        console.log(res)
        return res;
    }
    else{
        console.log("Earn more")
        return res;
    }
}

savings([1000,2000,3000],5400)
savings([1000,2000,2500],5000)
savings([900,2700,3400],10000)
savings(5400 ,[1000,2000,3000])