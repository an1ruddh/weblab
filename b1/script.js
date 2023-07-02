function runMapExample(){
    var map = new Map();
    console.log("running map example")
    console.time("map")
    for(let i = 0;i< 10000 ;i++){
        map.set(`key${i}`,`value${i}`)
    }
    console.timeEnd("map")
}
function runObjectExample(){
    console.log("Running Object Example");

    const obj = {};
  
    console.time("Object");
  
   
    for (let i = 0; i < 10000; i++) {
      obj[`key${i}`] = `value${i}`;
    }
  
  
  
    console.timeEnd("Object");
}