module.exports = class A {
  assertEquals(a, b) {
    if (a !== b) {

      throw new Error(a + " !== " + b);
    
    }
    else{
        console.log("looks great!");
    }
  }
}
