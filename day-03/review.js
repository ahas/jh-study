var a = 3;
var b = 5;
var c = a + b;

c = a - b;
c = a * b;
c = a / b;
c = a % b;
c = a ** b;
c += 1;
c = c + 1;
c -= 1;
c = c - 1;
c *= 2;
c = c * 2;
c /= 2;
c = c / 2;

c++;
c--;
++c;
--c;

a == b;
a != b;
a > b;
a >= b;
a < b;
a <= b;

// a == 5 => true
// b == 3 => true
// && => true true => true
// || => ture false => true

a == 5 && b == 3; // a 는 5 이고 b는 3이다
a == 5 || b == 3; // a 가 5 거나 b는 3이다

// ! => not (아니다)
!(a == 5); // => false

// a 가 5라고 가정하면
// b 는 3이다
!a == 5 && b == 3;
!true == 5 && b == 3;
false == 5 && b == 3;
false == true && b == 3;
false && b == 3;
false && true;
false;

// true         false
// 0이 아니다. | 0이다.

//-----------------------------

// if 문은 괄호 () 안에 식을 넣음
if (true || false) {
    // if 의 식이 true 라면
    // 여기 내용이 실행됨
} else {
    // if 의 식이 false 라면
    // 이곳이 실행됨
}

// else if 문의 진실
if (true || false) {
} else if (true || false) {
} else if (true || false) {
} else {
}

// if 문에 중괄호 ({}) 가 없으면 뒤에 오는 구문 1개를 실행함
if (true || false) a = b;
else a = c;

if (true || false) {
    // ~
} else {
    if (true || false) {
        // ~
    } else {
        if (true || false) {
            // ~
        }
    }
}

if (true || false) {
    // ~
} else if (true || false) {
    // ~
} else if (true || false) {
    // ~
}

// 식이 true면 실행

if (식) {
} else if (식) {
} else {
}

if (a == 5) {
    console.log("a는");
    console.log("5 입니다.");
}
