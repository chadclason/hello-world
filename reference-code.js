//Callback function example 

  var years = [1990, 1965, 1937, 2005, 1998]
  function arrayCalc(arr, fn) {
      var arrRes = [];
      for (var i; i < arr.length; i++) {
         arrayRes.push(fn(arr[i]));
      }
      return arrRes;
  }
  
  function calculateAge(el) {
          return 2016 - el;
  }
  function isFullAge(el) {
      return el>= 18;
  }
      
  function maHeartRate(el) {
      if (el >- 18 && el <= 81) {
          return Math.round(206.9 - (0.67 * el));
      } else {
          return -1;
              }
   }
