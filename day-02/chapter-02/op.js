// 연산자 = 사칙연산 or 이것저것 계산할 수 있는 기능
// a = 6은 a에 6을 대입한다. 라고 한다.

var a;
var b;
var c;

a = 6;
b = 7;
c = a + b;
console.log(c);

a = 5;
b = 10;
c = a * b;
console.log(c);

a = 12;
b = 2;
c = a / b;
console.log(c);

a = 10;
b = 3;
c = a % b;
console.log(c);

a = 1;
console.log("a는 %d 입니다.", a);
a += 1;
console.log("a에 1을 더하면 %d 입니다.", a);

a -= 1;
console.log("a는 %d 입니다.", a);
a *= 2;
console.log("a에 2를 곱하면 %d 입니다.", a);

a = 10;
console.log("a는 %d 입니다.", a);
a /= 2;
console.log("a 나누기 2는 %d 입니다.", a);

a = 10;
console.log("a는 %d 입니다.", a);
a %= 3;
console.log("a를 3으로 나눈 나머지는 %d 입니다.", a);

a = "문자열";
a += "입니다.";
console.log(a);

a = 1;
console.log(a++);
console.log(a);

a = 6;
console.log((a++) ** 2);
