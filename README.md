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

- push() 배열의 맨 끝에 순차적 요소 추가
- unshift() 배열의 맨 앞에 순차적 요소 추가
- pop() 맨 뒤의 요소를 삭제(실행시킨 순간 젤 뒤의 값을 리턴(가지고있음))
- shift() 맨 앞의 요소를 삭제
- splice(idx) 지정한 인덱스의 요소 포함 이후 요소 삭제
- splice(idx1, n) 지정한 인덱스부터 n개 삭제
- splice(idx1, n, x) 지정한 인덱스부터 n개를 x로 치환
- slice(n, m) n번부터 m번 전까지 출력
- indexOf() : 해당 요소의 인덱스 값 반환(없는 요소면 -1 반환)
- find : 테스트 함수의 조건에 맞는 첫번째 요소 값을 반환
- findIndex : 테스트 함수의 조건에 맞는 첫번째 요소의 인덱스 번호를 반환
- for ~ of : 순차적으로 내부 요소에 접근할 수 있는 이터러블(배열을 일반화)한 객체만 사용가능

- 유사배열 : 배열처럼 인덱스와 같이 길이 프로퍼티가 존재 / 배열은 아님
        // Array.from() : 유사 배열을 받아서 진짜 배열로 만들어줌
- join
        console.log(arr4.join());
        console.log(arr4.join(' '));
        console.log(arr4.join(' - '));

- foreach() : 배열만 사용가능한 메소드(유사배열 x)
let avengers = ["스파이더맨", "호크아이", "헐크"];
    
        avengers.forEach((avenger) => {
            console.log(avenger);
        })

        avengers.forEach(printName);
        function printName(avenger){
            console.log(avenger);
        }
- map - 주어진 조건으로 새로운 배열을 만듬
let arr5 = [1, 2, 3, 4, 5];
        let expo = [];

        arr5.map((n)=> expo.push(n**2));
        let expo2 = arr5.map((n) => n**2);

- for문, foreach문 제곱
// for (let index = 0; index < arr5.length; index++) {
        //     arr5[index] *= arr5[index];
        //     console.log(arr5[index]);
        //     expo.push(arr5[index]);
        // }
        // arr5.forEach((x) => {
        //     expo.push(x**2);
        // })
        // console.log(expo);

        const info = [
    {
        id: 1,
        name: "js"
    },
    {
        id: 2,
        name: "javascript"
    }
        ];

        const names = info.map(info => info.name);
        console.log(names);
        
- filter(배열로 출력)
    console.log(todos);
    console.log(todos.find(todo => todo.id ===3));
    console.log(todos.find(todo => todo.done === false));
    console.log(todos.filter(todo => todo.done === false));
    console.log(todos.filter(todo => todo.done === true));

- reduce()
    let sumReduce = arr5.reduce((acc, current)=> {
        return acc + current;
    
    }, 0);
    // reduce
    let reduce2 = arr5.reduce((acc, cur) => acc + cur);
    console.log(reduce2);
    console.log(sumReduce);

[string](./step05_object/lab03_string.html)

- length : 문자열 길이
- charAt(n) : n번째 문자 반환
- substring(str1.substring(5,9)) - 5번째부터 9번째까지 출력
- replace() - 문자 변환
- split() : 기준에 따라 문자열을 분할하여 배열로 반환
- concat() : 문자열을 결합

[number](./step05_object/lab04_number.html)
- number() - 문자열을 숫자로 바꿔줌
- parseInt() : 소수점 버리고 정수로
        -> 문자열을 숫자타입으로 바꿔줌 

- parseFloat() : 문자열을 숫자형태로

- Number.toFixed() : 지정한 소수점 자리까지만 남김(자동 반올림)

[date](./step05_object/lab05_date.html)

- Date : 현재 날짜 및 시간을 참조하는 객체(월은 0부터 시작해서 +1 해줘야 함)
        let dateObj = new Date();
        console.log(dateObj.getFullYear());
        console.log(dateObj.getDate());
        console.log(dateObj.getDay()); - 0 = 일요일
        console.log(dateObj.getHours());
        console.log(dateObj.getMonth()+1);

    - Date.parse(str) : 문자열에서 날짜 타입으로 변경
    단 형식은 YYYY-MM-DDTHH:mm:ss
    console.log(new Date(Date.parse("2020-06-01T09:00:00")));

[dom](./step06_dom/lab01_dom.html)

DOM 문서 객체 모델(Document Object Model)
: 웹 페이지의 모든 컨텐츠를 객체로 표현하는 모델
DOM 트리 : DOM을 계층적으로 표현, 계층적인 단위 Node

- Document 객체
: 웹 페이지 자체, 따라서 모든 HTML요소에 접근하기 위해서는 Document 객체로부터 시작

- DOM Selection (선택) : 
     DOC

- 노드를 통한 접근
    - 종류
        - 문서 노드
        - 요소 노드
        - 속성 노드
        - 텍스트 노드
        - 주석 노드
    - 관계성
        - 조상(상위)/부모
        - 자손(하위)/자식
        - 형제 : nextSibiling, previousSilibing

     - 노드로 접근하는건 부적절

- DOM Manipulation(조작)

- BOM Browser Object Model
 자바스크립트를 이용하여 브라우저를 제어 가능하도록 설정하는 객체 모델

 - setTimeout : 일정 시간 후에 함수를 실행하는 메소드

 var header = document.createElement('h2'); 
document 객체에 접근해서 <h2> 태그를 생성

var textNode = document.createTextNode('Hello DOM');
그 다음은 document 객체에 접근해서 TextNode를 생성하고 'Hello DOM'이라는 스트링

header.appendChild(textNode);
위에서 생성한 <h2> 태그에 자식노드를 추가 그 추가되는 자식노드는 아까 위에서 생성한 Text Node

document.body.appendChild(header);


[event](./step06_dom/lab02_event.html)

- event
1. 인라인 방식
const describeElem = document.getElementById('describe');
            // function clickFunc() {
            //     describeElem.innerHTML = '계좌 조회 서비스';
            // }

            <!-- <button id="check" class="tab" name="checkName" onclick="clickFunc()">조회</button> -->

2. 프로퍼티 방식
const checkElem = document.getElementById('check');

            checkElem.onclick = function clickFunc() {
                describeElem.innerHTML = '계좌 조회 서비스';
            };

3. 이벤트 헨들러 방식
checkElem.addEventListener('click', () => {
                describeElem.innerHTML = '계좌 조회 서비스'
                })


mouse event : click, dblclick, mouseover.....
focus event : focus, blur, focusin.....
keyboard event : keydown, keypress, keyup

- 이벤트 흐름
: 이벤트가 발생하는 html 요소는 계층적인 구조로 되어 있기 때문에 주변 요소에 영향을 미침

- 버블링
: 자식요소의 이벤트가 일어났을때 부모요소까지 이벤트가 실행되는 현상
- 캡처링
: 부모요소의 이벤트가 일어났을때 자식요소까지 이벤트가 실행되는 현상
(형제요소에는 버블링, 캡쳐링이 영향 없음)

[apply](./step07_apply/lab01_apply.html)

- 삼항 연산자
: 조건 ? true : false

- Truthy / Falsy
falsy = false처럼 행동하는 값

// falsy : false처럼 행동하는 값, 이외 모든값들은 truthy
        console.log(!undefined)
        console.log(!false)
        console.log(!null);
        console.log(!0);
        console.log(!'');

//불린 값이 아니어도 truthy 한 값이기 때문에 사용 가능
- &&
        console.log(true && 'js');
        console.log('java' && 'js'); // 앞에 있는 java는 true로 인식해서 js가 출력
// 앞 조건이 true인 경우에 뒷 조건이 출력되게 코드를 짤 경우

- ||
// or 연산은 모두 참이면 앞의 내용이 출력
        // 앞에있는 객체의 결과가 false인 경우 뒤에 있는 값을 출력값을 지정하고자 할때

//함수의 파라미터 기본값을 초기화 할 수 있다.
        let cal = (r=1) => {
            // let radius = r || 1;
            
            return Math.PI * r**2;
            
        }
        console.log(cal());

               console.log(calCircleArea());
        //함수의 파라미터 기본값을 초기화 할 수 있다.
        let cal = (r) => {
            // let radius = r || 1;
            r = !r || r;
            return Math.PI * r**2;
            
        }
        console.log(cal(2));

        // 조건문 활용
        // 파라미터 vs 인자
        // 파라미터 : 함수를 정의할 때 사용하는 소괄호 안에 있는 변수
        // 인자 : 함수를 호출할 때 사용하는 함수 내에 사용되는 변수
        //checkMonth() : (ver1) month가 존재하는지 여부 판단
        // function checkMonth(month) {
        //     if(month === 1 || month === 2){
        //         return true;
        //     }
        // }
        // return (month === 1 || month === 2);

        // let months = [1, 2, 3, 4, 5];
        // return months.includes(month);

        function getMonth(r){
            // switch(month){
            //     case 1 : return '1월';
            //     case 2 : return '2월';
            //     case 3 : return '3월';
            // }
            
            let months = {
            1: '1월',
            2: '2월',
            3: '3월'
        }




            return months[r] || '없음';
        }
        console.log(getMonth(1));
       
        // 비구조화 문법
        // let obj = {x:1, y:2}

        // let { x, y } = obj;
        // console.log(x);
        // console.log(y);

         
        


// obj = {x:1};

//         function printValue({x, y}){
//             console.log(x);
//             console.log(y || 2);
//         };
//         printValue(obj);

    // 배열
    let arr2 = [1,2];

    let [one, two] = arr2;
    console.log(one); 
    console.log(two); 

   // 객체 깊은 데이터
    // let deepObj = {
    //     info: {
    //         private: {
    //             name: 'js',
    //             age: 17,
    //             hobbies: ['prgramming', 'studying']
    //         }
    //     },
    //     purpose: '비구조화 테스트'
    // }
    // let {name, age, hobbies} = deepObj.info.private;
    // console.log(name, age, hobbies[1]);

    // let {
    //     info: {
    //         private: {
    //             name,
    //             age,
    //             hobbies: [first]
    //         }
    //     },
    //     purpose
    // } = deepObj2;
    

    // spread, rest
    // spread : ...
    let planet = {
        continent: 'Asia'
    };

    let country = {
        continent: 'Asia',
        country_name: 'ROK'
    };

    let city = {
        continent: 'Asia',
        country_name: 'ROK',
        region: 'Busan'
    };

        console.log(planet);
        console.log(country);
        console.log(city);

        //배열 spread
        let arr3 = [1, 2, 3];
        let arr4 = [...arr3, 5];

        console.log(arr4);

        // rest : ...
    // 객체
    // let city = {
    //     continent: 'Asia',
    //     country_name: 'ROK',
    //     region: 'Busan'
    // };
    // let { region, ...country} = city;
    // console.log(region);
    // console.log(country);
        
        function sum(...rest){
            return rest.reduce((acc, cur) => (acc + cur), 0);
        }
        console.log(sum(1,2,3,4,5));

        let arr5 = [1, 2, 3, 4, 5]
        console.log(sum(...arr5));

- spread : 객체의 요소들을 모아 새로운 객체를 만듬
- rest : const [one, ...rest] = numbers;
: one을 빼고 나머지 요소들을 모아 새로운 객체를 만듬


- 상속
1. 프로토타입 : 부모가 자식 메소드 접근 가능함
// 상속
// 1. 프로토타입
function Parent(name, age) {
    this.name = name;
    this.age = age;
};

function Child(name, age) {
    this.name = name;
    this.age = age;
};

let p1 = new Parent("p1", 31);
let c1 = new Child("c1", 1);






// 2.
function Parent(name, age) {
    this.name = name;
    this.age = age;
};

function Child(name, age) {
    this.name = name;
    this.age = age;
};

Child.prototype = {...Parent.prototype};

Child.prototype.getName = function (){
    console.log(this.name);
}

let p2 = new Parent("p2", 32);
let c2 = new Child("c2", 2);



// 3.
function Parent(name, age) {
    this.name = name;
    this.age = age;
};

function Child(name, age) {
    this.name = name;
    this.age = age;
};

Child.prototype = Object.create(Parent.prototype);

Child.prototype.getName = function (){
    console.log(this.name);
}

Parent.prototype.getAge = function (){
    console.log(this.age);
}

let p3 = new Parent("p3", 33);
let c3 = new Child("c3", 3);

c3.getName();
c3.getAge();

p3.getAge();
// p3.getName(); // 에러

// 체크
console.log(p3.__proto__.constructor);
console.log(c3.__proto__.constructor);
c3.__proto__.constructor = Child;
console.log(c3.__proto__.constructor);

//4. class를 통한 상속
class Parent {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getAge() {
        console.log(this.age);
    }
};
class Child extends Parent {
    constructor(name, age) {
        super(name, age);
    }
    getName() {
        console.log(this.name);
    }
};

let p4 = new Parent("p4", 34);
let c4 = new Child("c4", 4);

// p4.getName();
c4.getAge();

[json](./step07_apply/lab02_json.html)

- json : JavaScriptObjectNotation, 문자열의 형태로 데이터를 주고 받는 포맷
: 내장 객체(js 운영되는 전역 접근 가능)
: key:value 한 쌍으로 구성, "" 따옴표가 붙어 있는 상태
: JSON.stringify : 객체를 json으로 변경
: 객체, 배열, 문자형, 숫자형, 불린, null
: 함수, 심볼, undefined 적용 안됨

- JSON.stringfy - 객체 -> 문자열 - 직렬화
- JSON.parse - 문자열 -> 객체 - 역직렬화

[asnyc](./step07_apply/lab03_async.html)

