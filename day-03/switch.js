// switch

// var a = Number(prompt());

// 들어오는 값은 하나인데
// 비교 대상도 하나일 때
// 우리는 이것을 switch 문으로 편하게 비교할 수 있다.

// if (a == 1) {
//     alert("a는 1입니다 !");
// } else if (a == 2 || a == 3) {
//     alert("a는 2 또는 3입니다 !");
// } else if (a == 4) {
//     alert("a는 4입니다 !");
// } else if (a == 5) {
//     alert("a는 5입니다 !");
// } else {
//     alert("a는 어떤 것도 해당되지 않습니다.");
// }

// switch (a) {
//     case 1:
//         alert("a는 1입니다 !");
//         break;
//     case 2:
//     case 3:
//         alert("a는 2 또는 3입니다 !");
//         break;
//     case 4:
//         alert("a는 4입니다 !");
//         break;
//     case 5:
//         alert("a는 5입니다 !");
//         break;
// }

var a = prompt();

switch (a) {
    case "안녕":
        alert("나도 안녕!");
        break;
    case "잘가":
        alert("너도 잘가");
        break;
    case "밥먹었니?":
        alert("응 나 밥 먹었어 너는?");
        break;
    case "운동했니?":
        alert("개빡셌지");
        break;
    default:
        alert("다시 한 번 말해줄래 ?");
}
