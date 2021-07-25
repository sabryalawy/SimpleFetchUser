import { AddUser, UpdateUser } from "../constants/user";

const initState = {
    users: [],
    loading: false,
    status: ""
}

const userReducer=( state = initState,action:any):any=> {
    if (action.type===AddUser) {
        return{
            ...state,
            users:state.users.concat(action.payload)
        };
    }else if (action.type===UpdateUser) {
        
        return {
            ...state,
            users:state.users.map((el:any)=>{

                if (action.payload.id===el.id) {
                    return action.payload;
                }
                return el;
            })
        }
    }

    return state;
}

export default userReducer;