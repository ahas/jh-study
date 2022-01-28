function 팩토리얼(값) {
    if (값 > 0) {
        return 값 + 팩토리얼(값 - 1);
    }
    return 0;
}

function 팩토리얼_1(값 = 5) {
    return 5 + 팩토리얼(4);
}

function 팩토리얼_2(값 = 4) {
    return 4 + 팩토리얼(3);
}

function 팩토리얼_3(값 = 3) {
    return 3 + 팩토리얼(2);
}

function 팩토리얼_3(값 = 2) {
    return 2 + 팩토리얼(1);
}

function 팩토리얼_4(값 = 1) {
    return 1 + 팩토리얼(0);
}

function 팩토리얼_5(값 = 0) {
    return 0;
}
