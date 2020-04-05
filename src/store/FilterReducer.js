const initState={
    name:null
}


const FilterReducer=(state=initState,action)=>{

    switch(action.type){
        case "SET_NAME":{
            return{
                ...state,
                name:action.name
            }
        }
        default:{
            return state;
        }
    }

}


export default FilterReducer