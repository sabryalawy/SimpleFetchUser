import { AddUser, AddUsers, DeleteUser, GetUsers, UpdateUser } from "../constants/user";

export const addUsers=(data:any)=>{
    return {type:AddUsers,payload:data};
}
export const addUser=(data:any)=>{
    return {type:AddUser,payload:data};
}

export const deleteUser=(data:any)=>{
    return {type:DeleteUser,payload:data};
}

export const getUsers=()=>{
    return {type:GetUsers};
}

export const updateUser=(data:any)=>{
    return {type:UpdateUser,payload:data};
}