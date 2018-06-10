var rectangle={
  perimeter:(x,y)=>(2*(x+y)),
    area:(x,y)=>(x*y)
}

function solveRect(l,b){
  //console.log("solving for rectangle with l"+l+"b"+b);
  if(l<=0 || b<=0){
    console.log("dimension should be greater then zero");
  }
  else{
    console.log("area of rectangle is"+rectangle.area(l,b));
    console.log("perimeter of rectangle is"+rectangle.perimeter(l,b));
  }
}
solveRect(2,5);
solveRect(6,7);
solveRect(2,-5);
solveRect(2,0);
