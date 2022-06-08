// function pow(x,n) {
//     let result=1;

//     for(let i=0;i<n;i++){ //거듭제곱 반복문
//         result*=x; 
//     }

//     return result;
// }

// let x=prompt("x?",""); //프롬프트 함수로 x와 n의 값을 가져옴
// let n=prompt("n?","");

// if(n<0){
//     alert(`${n}은(는) 잘못된 숫자입니다. 양수를 입력하세요.`);
// }else{
//     alert(pow(x,n));
// }

//더 나은 코드로 고쳐보자.

function pow(x, n){
 let result = 1;

 for(let i = 0; i < n; i++) {
  result*=x;
 }

 return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0){
 alert(`Power ${n} is not supported, 
 please enter an integer number greater than zero`);
 } else {
 alert( pow(x, n) );
}
