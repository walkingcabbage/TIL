//로또의 값을 만들지 말지 선택
// let doGeneration =confirm("로또 번호를 만드시겠습니까?");
let doGeneration=true;
if(doGeneration){
    let lotteryNum=lotteryGenerator(); 
    console.log(lotteryNum);
    lotteryNum.sort((a, b) => a - b);
    // console.log("🍀오늘, 당신이 받을 행운의 번호는~?🍀");
    console.log(lotteryNum);
} else {
    console.log("🍀행운을 빌게요!🍀");
}

/*
 1) 1~45까지의 양수 중에서 랜덤으로 가져오면서 lotteryNums에 하나씩 저장
 2) 저장하면서 전 배열에 중복값이 있나 확인 
 3) 그렇게 모든 배열을 채웠다면 오름차순으로 정렬
 4) 배열 반환
*/


function lotteryGenerator() {

    let lotteryNums=[];
    begin:for(let i = 0; i < 7; i++){
        do{
            lotteryNums[i]=numberGenerator(); //1~45 난수를 lotteryNums[i]에 저장
            if(i===0) continue begin; //첫번째 수는 overlap()함수를 실행시키지않고 바로 배열에 저장
        } while (isOverlap(lotteryNums)); //isOverlap()함수에서 true를 반환한다면 번호를 다시 뽑음
    }
    

    return lotteryNums;
}



function numberGenerator() { //난수 생성기
    return Math.floor(Math.random()*(45))+1;
}

function isOverlap(...numbers) { //전 배열 중복값 확인기
    for(let i = 0; i < numbers.length-2;i++){
        if(numbers[numbers.length-1]==numbers[i]){
            return true;
        }
    }
    return false;
}

