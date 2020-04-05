const initState={
    users:[
        {id:0,name:'Stefan Cvetanovski',age:30,sex:"male",address:"Fevruarski Pohod 42-13",birthday:'06/08/1997',email:'cvetanovskistefan72@gmail.com',status:'active',
        notes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatum assumenda incidunt mollitia explicabo sed facilis reiciendis, tenetur et earum voluptas neque architecto? Assumenda deleniti fugit  architecto, fuga dignissimos nisi.'},
        {id:1,name:'Elena Cvetanovska',age:15,sex:"female",address:"Fevruarski Pohod 42-13",birthday:'02/12/2002',email:'elenacvajn@gmail.com',status:'active',
        notes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatum assumenda incidunt mollitia explicabo sed facilis reiciendis, tenetur et earum voluptas neque architecto? Assumenda deleniti fugit  architecto, fuga dignissimos nisi.'},
        {id:2,name:'Dushko Taseski',age:22,sex:"male",address:"Ohrit",birthday:'16/05/1998',email:'dulesunduk@gmail.com',status:'not active',
        notes:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatum assumenda incidunt mollitia explicabo sed facilis reiciendis, tenetur et earum voluptas neque architecto? Assumenda deleniti fugit  architecto, fuga dignissimos nisi.'}
    ],
    clientID:'',

}

const AuthReducer =(state=initState,action)=>{
    switch(action.type){
        case "ADD_CLIENT":
            console.log(action.clientInfo)
            return {
                ...state,
                users:[...state.users,action.clientInfo]
            };
         
        case "FIND_CLIENT":
            
            return{
                ...state,
                clientID:action.clientID
            }
            
        default:
            return state;
    }
}

export default AuthReducer;