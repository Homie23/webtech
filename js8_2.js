function sum(...args) {
    return args.reduce((acc, val) => acc + val);
  }
  
  function mul(...args) {
    return args.reduce((acc, val) => acc * val);
  }
  
  function applyAll(func, ...values) {
    return func(...values);
  }
  
  console.log(applyAll(sum, 1, 2, 3) ); 
  console.log(applyAll(mul, 1, 2, 3, 4) ); 