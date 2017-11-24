 const {
     fnAttempt
 } = require("./dist/lightdash.common");

 const foo = (a, b) => {
     if (b > 10) {
         throw new RangeError();
     }

     return a + b;
 };

 console.log(fnAttempt(foo, 2, 1));
 console.log(fnAttempt(foo, 2, 500));
