function runSetExample() {
    console.log("Running Set Example");
  
    const set = new Set();
  
    for (let i = 0; i < 10000; i++) {
      set.add(Math.floor(Math.random() * 10000));
    }
  
 
    console.time("Set");
  

    const searchValue = 5000;
    const isValuePresent = set.has(searchValue);
    console.log(`Is ${searchValue} present in the set? ${isValuePresent}`);
  
    
    console.timeEnd("Set");
  }
  
  function runArrayExample() {
    console.log("Running Array Example");
  
    const array = [];
  
    for (let i = 0; i < 10000; i++) {
      array.push(Math.floor(Math.random() * 10000));
    }
  
 
    console.time("Array");
  
    const searchValue = 5000;
    const isValuePresent = array.includes(searchValue);
    console.log(`Is ${searchValue} present in the array? ${isValuePresent}`);
  

    console.timeEnd("Array");
  }
  