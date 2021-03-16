import {GOODMORNING,GOODAFTERNOON,GOODNIGHT} from "./wish.action";
let initialState={
    message:"Hii",
};
let wishReducer =(state=initialState, action)=>{
switch(action.type){
        case GOODMORNING:
            return{message:"Good Morning- Reducer"};
        case GOODAFTERNOON:
            return{message:"Good Afternoon- Reducer"};
        case GOODNIGHT:
            return{message:"Good Night- Reducer"};
         default:
    return state; 
}        
 };
export {wishReducer};
