let num=9; // 이건 undefined이다. 


if (num) {
    console.log("true!");
}else{
    console.log("false!");
}
//false에는 0,-0,'',null,undefined,NaN 등이 있다.
num && console.log(num); //&&는 '만약 왼쪽 항이 true라면 왼쪽 항을 실행한다. 
