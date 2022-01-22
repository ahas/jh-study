// 식의 결과가 true일 떄 if 문이 실행된다.
if (식) {
    // 이 블록의 명령들이 실행됨
} else if (식) {
    // else if 조합으로 추가적인 분기를 설정 가능
} else {
    // else는 식을 가질 수 없다.
    // 식의 결과 값이 false 일 때 이 블록이 실행됨
}

// 식의 결과가 true 라면 반복한다.
while (식) {
    // 이 블록의 명령들이 반복됨
}

// n번 반복하고 싶을 때
var i = 0;

while (i < 10) {
    i++;
}

// i가 5일 때 while 을 나가고 싶은 경우
var i = 0;

while (i < 10) {
    i++;

    if (i == 5) {
        break; // while의 밖으로 나간다.
    }
}
