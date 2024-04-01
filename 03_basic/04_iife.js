// Immediately Invoked Function Expressions (IIFE)

// named IIFE
(function chai(params) {
    console.log(`DB Connected`);
})(); // === chai() 


//without name
((name)=>{
    console.log(`DB Connected Two ${name}`);
})('sum') // (name)("sum")


/**NOTE**/
// name iife and without name iife write after and after then last of name iife function write ";" either "error show"