//Object
let obj={'key1':'val1'};
var key2='item2';
let obj2={key2:'val2'};
let obj3={['key3']:'val3'};
console.log(obj,obj2,obj2[key2],obj3);


var key4='val4';
let obj5={key4:key4};//key4와obj4와 같이 같음.
//앞은 key4라는 '문자열'이고, 뒤에는 key4라는 변수값임.
//key와 value 값이 같을 경우
let obj4={key4};

console.log(obj4,obj5);

let obj6={key1:111,key2:2222};
obj6.key3=3333;//객체의 추가가 가능하다.== obj6[key3]=3333;
console.log(obj6);

let obj7={...obj6,key1:333}; 
//obj6값을 복사해서 obj7에 붙혀넣음.
//거기에 key1의값을 수정하거나 추가하면 그 값이 함께 출력됨
//기존에 있으면 수정된값 출력
console.log(obj7);

//문자열을 다시 객체로 만들었으니 새로운 객체다!
let obj8=JSON.parse(JSON.stringify(obj6));
console.log(obj6,obj7,obj8);

//새롭게 만든 타겟에다가 obj6을 넣어주면
//새로운 객체가 된다. 여기서 target은 {}, 그래서 return target이{}안에 obj6이 들어있는것으로, 새로운객체가 된것이다.
let obj9=Object.assign({},obj6);
console.log(obj9);

let obj10={func1(){console.log('func1');}};
//key값은 func1, value값은 함수 
//obj10과 obj11은 동일한 패턴
let obj11={func1:function(){console.log('func2');}};
obj10.func1();
obj11.func1();