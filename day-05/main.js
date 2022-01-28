// 함수 Function
// 선언형
// 함수가 전달받는 변수 = 매개변수
function 더하기(a, b) {
    console.log("더할겁니다.");
    return a + b;
}

function 자연수만_더하기(a, b) {
    if (a <= 0 || b <= 0) {
        // 자연수가 아니다
        return; // undefined
    }
    console.log("더합니다.");
    return a + b;
}

let 결과값 = 더하기(1, 3);
let 자연수결과값 = 자연수만_더하기(-4, 5);

console.log(결과값);
console.log(자연수결과값);

// 재귀 함수 Recursive Function
// 5! = 5 + 4 + 3 + 2 + 1
function 팩토리얼(값) {
    if (값 > 0) {
        return 값 + 팩토리얼(값 - 1);
    }
    return 값;
}

function 팩토리얼_루프로(값) {
    let total = 0;
    for (i = 0; i < 값; i++) {
        total = total + (값 - i);
    }
    return total;
}

alert(팩토리얼_루프로(Number(prompt())));
// alert(팩토리얼(Number(prompt())));
