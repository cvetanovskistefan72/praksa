export const Add_Client=(clientInfo)=>{
    
    return {
       type:"ADD_CLIENT",
       clientInfo:clientInfo
    }
}

export const FindClient=(clientID)=>{
    
    return{
        type:"FIND_CLIENT",
        clientID:clientID
    }
 
}

