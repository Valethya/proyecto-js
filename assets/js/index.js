let numbers=[]
for(i=0;i<=100;i++){
    
    let num=i+(numbers[1])   
    numbers.push(num)
}

for(const num of numbers){
    sum=sum+num
}



// funciona
let numbers=[]
for(i=0;i<=100;i++){
    numbers.push(i)
    let sum=0
    for(const num of numbers){
        sum=sum+num
    }
}// 5050