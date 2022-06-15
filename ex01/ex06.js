let func1 = function() { return 'func1 run...'; };
let result1 = func1();
let func2 = (a, b) => {     // arrow function 은 객체 생성이 안되서 this 가 없다.
    console.log('run...');
    return b + 'func2 run...' + a; 
};
let result2 = func2(12, 34);
// console.log(result1, result2);

new func2();