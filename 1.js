const result = 50;

if(result>=80 && result<=100){
    console.log("You Got A+")
}
else if(result>=70 && result<=79){
    console.log("You Got A")
}
else if(result>=60 && result<=69){
    console.log("You Got A-")
}
else if(result>=50 && result<=59){
    console.log("You Got B")
}
else if(result>=40 && result<=49){
    console.log("You Got C")
}
else if(result>=33 && result<=39){
    console.log("You Got D")
}
else if(result>=0 && result<=32){
    console.log("You Got F")
}
else{
    console.log("Invalid result")
}