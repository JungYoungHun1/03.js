// "use-strict" // 스크립트 문법 엄격하게 체크

// const baseURL = 'http://apis.data.go.kr/4050000/nrsry/getNrsry';
// const keyValue = "0CUD%2BhZQ4sTnwkWHnGI3y%2FM6v5ku9HzpVZpcgDvohwVzAclk3cOrRospLzcK2hWZRpG7FZWVmbhlUWLTHV1vBA%3D%3D";
// const targetDate = 20211101;
// const drawInfoElement = document.getElementById("draw-info");

// var url = 'https://cors-anywhere.herokuapp.com/'+ baseURL + '?serviceKey=' +keyValue + '&pageNo=' + this.pageNo + '&numOfRows=' + this.numOfRows + '&nrsry_type=' + this.nrsryType;
// // var url = 'http://apis.data.go.kr/4050000/nrsry/getNrsry?serviceKey=0CUD%2BhZQ4sTnwkWHnGI3y%2FM6v5ku9HzpVZpcgDvohwVzAclk3cOrRospLzcK2hWZRpG7FZWVmbhlUWLTHV1vBA%3D%3D&pageNo=3&numOfRows=5'; 
// // axios.get(url, {
                    
// //                 }).then(response => response.data)
// //                         .then((result) => {
// //                             console.log(result);
// //                             result.forEach((element) =>{            
// //                            console.log(element)
// //                         })
// //                     });


// axios.get('http://openapi.seoul.go.kr:8088/6566636d7664657333306b51495343/json/LOCALDATA_031305/1/10/')
// .then(response => console.log(response.data))
// .then((data) =>
//         console.log(data)
//     )
// .then((result) => {
//     console.log(result)
//     result.forEach((element) => {
//         console.log(`${element.DTLSTATENM}`)
//     })
// })

// "use strict";

// const key = `j7yJvve3MdJfLEEdkXaieFvwv4m9DAaZ%2BEkzifGP8v7%2FVVsJ%2BAZHoBPk%2BeuHs1JMI0l7%2Bvw3un%2BN86MnJ990%2Bg%3D%3D`;
// const baseURL = `https://api.odcloud.kr/api/15084647/v1/uddi:e4efe850-7e83-43be-9ac9-d1e148a7316f?serviceKey=${key}`;

// const formSelect = document.querySelector(".form-select");
// const alert = document.querySelector(".alert");

// axios
//   .get(baseURL)
//   .then((res) => res.data)
//   .then((data) => data.data)
//   .then((result) =>
//     // console.log(result.data),
//     result.forEach((el) => {
//       console.log(el);
//     //   console.log(el[`월별 확진자 수`]);
//         alert.innerHTML += `
//           <div class="alert alert-warning" role="alert">${el.연월일} :  : ${el.인구수}</div>
//           `;
//     })
//   )
//   .catch((error) => {
//     console.log(`error: ${error}`);
//   });

alert('따로 결과물 없이 계속 코드 살펴봤습니다...죄송합니다!');

