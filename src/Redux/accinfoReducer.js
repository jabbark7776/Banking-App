const InitialState={
    accinfo:{},
}

export const accinfoReducer=(state=InitialState,action)=>{
if(action.type==="accinfo"){
    return{
        ...state,
        accinfo:action.payload
    }
}
if(action.type=="loginfo"){
    return{
        ...state,
        loginInfo:action.payload,
    }
}
return state;
}