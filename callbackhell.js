function test1() {
    setTimeout(() => {
        console.log("test1")
        cb();
    }, 2000);
    
}
function test2(cb) {
    setTimeout(() => {
        console.log("test2")
        cb();
    }, 1000);
    
}
function test3() {
    setTimeout(() => {
      console.log("test3");
      cb();
    }, 500);
    
}
function test4() {
    setTimeout(() => {
      console.log("test3");
      cb();
    }, 500);
    
}
test1(() => {
    test2(() => {
        test3(() => {
            test4();
        });
    });
});