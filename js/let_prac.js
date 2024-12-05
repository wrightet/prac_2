if (true) {
    let a = 10;
    var b = 20;
  }
  console.log(a); // What happens? a is out of the scope of the console log. It is block scoped. 
  console.log(b);
  