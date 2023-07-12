//Type 변환 방법
//typeof 키워드를 쓰면 type 확인
//prompt();에서 숫자를 입력해도 string type. string이 디폴트
const age = prompt("how old are you?");
console.log(typeof age);

//"숫자"가 아닌게 입력되면 변환이 안됨. NaN(not a number)
console.log(typeof parseInt(age));

//숫자인지 판별하는 함수
console.log(isNaN(age));