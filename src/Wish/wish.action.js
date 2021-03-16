const GOODMORNING ="GOODMORNING";
const GOODAFTERNOON="GOODAFTERNOON";
const GOODNIGHT="GOODNIGHT";
 let sayGMAction =()=>{
     console.log();
         return {
             type:GOODMORNING,
         
     }
 } 
 let sayGAAction=()=>{
     console.log();
     return {
         type:GOODAFTERNOON,
     }

 }
 let sayGNAction=()=>{
     console.log();
     return {
         type:GOODNIGHT,
     }
 }
export {
    GOODMORNING,GOODAFTERNOON,GOODNIGHT,
    sayGMAction,sayGAAction,sayGNAction,
};