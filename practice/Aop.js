Aop = {
  around: function (fnName, advice, fnObj) {
    /* 
     You need to modify your Aop.around method to provide 
     the necessary information about the targetFn 
     to the advice function.
    
     what is that "necessary information"?
     how do I provide it to the advice() function?

     This is where the targetInfo object comes into play.
    */

    /* 1. Store the original target function (targetFn) in a 
     variable called originalFunction. 
     This is like remembering how the robot picks up the block. */
    var originalFunction = fnObj[fnName];
    
    /*  2. Replace the target function (targetFn) with a new function. 
     This new function will call the advice function 
     and give it information about the original target function. */
    fnObj[fnName] = function() {
      
      /* 3. Create an object called targetInfo. This object will store 
      the original target function in a property called fn. 
      It also stores the arguments that the target function received 
      in a property called args. 
      This is like telling the advice function, "Hey, this is how 
      the robot picks up the block, and these are the instructions 
      it received." */
      var targetInfo = {
        fn: originalFunction,
        args: arguments
      }

      /* 4. Call the advice function and pass it the targetInfo object. 
      This allows the advice function to access the original target 
      function and its arguments. */
      advice(targetInfo);
    }  

    /* Now, when you call the modified targetFn, it will execute
     the advice function, which can now decide when to perform the main task 
     (picking up the block) and the extra actions (blinking the eyes) 
     using the information from the targetInfo object. */
  }
};
