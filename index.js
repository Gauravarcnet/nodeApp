// var rectangle={
//   perimeter:(x,y)=>(2*(x+y)),
//     area:(x,y)=>(x*y)
// }
var rect=require('./rectangls');


function solveRect(l,b){
  console.log("solving for rectangle with l"+l+"b"+b);
  rect(l,b,(err,rectangle)=>{
    if(err){
      console.log("error",err.message);
    }else {
      console.log("the area of rectangle of dimension"+rectangle.area());
      console.log("the perimeter of rectangle of dimension"+rectangle.perimeter());

    }
  });
  console.log("this call is after the call to record");
}
solveRect(2,5);
solveRect(6,7);
solveRect(2,-5);
solveRect(2,0);
