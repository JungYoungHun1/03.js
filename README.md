## js

출력방법
1. console.log
2. prompt()
3. alert
4. document.write()
5. HTML 요소를 통한 출력

step02
[lab01_variable.html](./step02_data/lab01_variable.html)


순서  
변수 선언 var = x;, 할당 x= 10;, 선언 + 할당 = 초기화 var y = 10;, x = 20(재초기화)

let, const = 상수

# var let const 차이
- 변수 재사용 시 에러 메시지가 출력되지 않고 그대로 적용되는 문제점을 해결하기 위해 let const 사용 
(코드량이 많을 경우 중복된 변수를 사용할 가능성이 있기 때문)
- var : 변수 재할당 재선언 모두 가능
- let : 변수 재할당 재선언 모두 가능하지만 재할당 방식이 다름
- const : 변수 재할당 재선언 모두 불가능

[lab02_type.html](./step02_data/lab02_type.html)

js의 자료형은 동적 타입이다(변수에 할당되는 데이터 타입이 정해져 있지 않은 상태)
- 기본 (원시, primitive) VS 객체(reference)

기본
Number
- NaN(Not a Number), Intinity
String
' ' , " "
console.log("큰따옴표 안에 \"큰따옴표\"");

- 백틱(` `) - 템플릿 리터럴
console.log(`한줄
        띄어쓰기`);
console.log('우리는 ' + lect + ' 학습중');
         console.log(`우리는 ${lect} 학습중`);

- Boolean : 참/거짓

- Undefined & Null
Undefined : 값이 할당 되지 않은 상태
null : 어느 자료형에도 속하지 않는 아무런 데이터가 없는 경우

- Symbol : 고유한 값
let a = Symbol();
console.log(typeof(a));
let b = Symbol('js');
let c = Symbol('js');
console.log(c==b)

[lab03_operator.html](./step02_data/lab03_operator.html)

연산(Operation), 연산자(Operator)
- 산술 연산
- 사칙 연산
- 대입 연산
- 비교 연산( == , != , ===(값과 타입이 같은지), !== etc)
- 논리 연산(&&, ||)


[lab01_condition.html](./step03_control_flow/lab01_condition.html)

조건문 : 조건을 만족 할 때 실행되는 명령어
if(조건){
    실행 로직;
}
else {}
else if()

switch-case 문
var x = 1;
        switch(x){
            case 0:
                console.log('0번');
                break;
            case 1:
                console.log('1번');
                break;
            default:
                console.log('default');
        }

[lab02_loop.html](./step03_control_flow/lab02_loop.html)

반복문 
- while
var a = 10;
        while(a<15){
            console.log(a);
            a++;
        }

- for
 for (let index = 0; index <= 10; index++) {
            console.log(index);
        }

[lab01_syntx.html](/step04_function/lab01_syntax.html)

함수 : 특정 기능을 수행하는 소스 코드를 묶어놓은 코드
선언
function print(){
            console.log('print');
        }

        print();
function add(num1, num2){
            console.log(num1 + num2);
        };
        add(1,2);

        let check = function(){
            console.log('check');
        }
        check();

함수를 이용하여 리턴을 할 수 있음

콜백 함수
function hello(callBack){
            console.log('hello');
            callBack();
        }
        hello(print);


[lab02_scope.html](./step04_function/lab02_scope.html)

변수의 유효범위 {}
let, const, var

- hoisting : 선언부만 끌어 올림(var만 가능)

[lab03_arraw.html](./step04_function/lab03_arrow.html)

화살표 함수 : => 표기법, 변수에 익명함수를 지정

 arrow = () => {
            console.log('arrow');
        }

        arrow();

let printName = (name) => {
            console.log(name);
        }
        printName('aa');

- 즉시 실행 함수
let name = '주경야독1';
        (function test(name1){
            console.log(name1);
        })(name);

[lab01_object.html](./step05_object/lab01_object.html)
객체 : 존재하는 사물의 실체, 속성/기능(동작)

1. 리터럴
-     let obj1 = {};
-     let obj2 = {id:1, name:"js1"};

2. 생성자 함수
-     obj3 = new Object();

3. 사용자 정의 생성자 함수(화살표 함수 불가능)
function Customer(id, name) {
        // this.id = 1;
        // this.name = 'js1';
        this.id = id;
        this.name = name;
    }
    let obj6 = new Customer(2, 'js2');

- //메소드
        this.getName = function() {
            return this.name;
        }
- 프로퍼티 추가&삭제
    obj6.grade='vip';
    console.log(obj6);
    delete obj6.grade;
    console.log(obj6);

    - for~in
    for(let info in obj6) {
        console.log(info);
    }
    key 값 출력

    for(let info in obj6) {
        console.log(obj6[info]);
    }

- Object
모든 객체의 최상위 객체 (prototype은 객체의 설계도, toString, etc..)
모든 객체는 object의 prototype을 통해 객체의 정보를 상속 받음

- instanceof
객체 instanceof 객체 - 좌측 객체가 우측 객체를 상속 받고 있는지 확인

- prototype을 통한 상속
function Person() {};
        Person.prototype.getPlanet = function() {
            console.log('Earth');
        }
    function Korean(region){
        this.region = region;
        this.getLoc = function(){
            console.log(this.region);
        }
    }
    Korean.prototype = Person.prototype;
    const k2 = new Korean('Busan');
    console.log(k2 instanceof Person);
    k2.getPlanet();

[배열](./step05_object/lab02_array.html)

- 배열
배열 : [요소1, 요소2, ...];
조회 : 배열명[index번호]
배열의 크기 : 배열명.length = 데이터의 개수
