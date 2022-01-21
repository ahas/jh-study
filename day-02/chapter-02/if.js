// 제어문 if 문, switch 문, for 문, while 문
// 문 = 구문이라는 뜻

// a == 1 => a 가 1과 같다
// a != 1 => a 가 1과 다르다
// a > 1 => a 가 1보다 크다 (초과)
// a < 1 => a 가 1보다 작다 (미만)
// a >= 1 => a 가 1과 같거나 크다 (이상)
// a <= 1 => a 가 1과 같거나 작다 (이하)

// a == 1 && b == 2 => a 가 1 이면서 b 는 2다 (그리고, AND)
// a == 1 || b == 2 => a 가 1 이거나 b 는 2다 (또는, OR)
// | => bar

// 110000
// 001100 &
// ------
// 000000

// 110000
// 111100 &
// ------
// 110000

// 110000
// 001100 |
// ------
// 111100

// 00110000 << 2
// --------
// 11000000

var a = 8;
if (a < 5) {
    // 만약 a가 5 보다 작다면 ?
    console.log("a가 5보다 작아요.");
} else if (a >= 5 && a <= 7) {
    // 또는 a 가 5 이상 7 이하라면 ?
    console.log("a가 5 이상이고 7 이하에요.");
} else {
    // 그 외에 라면 ? (어떤 경우도 해당되지 않는다면 ?)
    console.log("a가 7보다 커요.");
}

// 다음에 할 것들
/*
변수, 연산자 (사칙연산, 비교연산, 논리연산)
if 문 제어

-------------------------------------
1.21
switch 문 (if 문 친구)
while 문 (반복문)
for 문 (반복문)

함수, 람다 (클로저)
오브젝트
=====================================

* HTML 조작 *

기초 웹개발 20 %

=====================================

클래스
프로토타입

자바스크립트의 더 다양한 기능 (부록)
*/