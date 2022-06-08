function add(num1,num2) {
    return num1+num2;
}

const sum=add(1,2); 

console.log(sum);

const doSomething=add;

console.log(doSomething(4,5)); //add와 똑같다.

function print(name,age) {
    console.log(`name : ${name}, age : ${age}`);
    
}


print("leeminwoo",25);

function devide(num1,num2) {
    return num1/num2;
}

function surprise(operator) {
    const result =operator(2,3);
    console.log(result);
}

surprise(add);
surprise(devide);