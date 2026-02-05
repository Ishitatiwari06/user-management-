import { users } from '../data/users.js';

export  const createUserService =  (name, email) => {
            const newUser = {
                id: Date.now().toString(),
                name,
                email
            };
            users.push(newUser);
           return newUser;
}; 

export const updateUserService = (id, name, email) => {
    const user = users.find(u => u.id === id);
    if(!user){
        throw new Error("User not found");
    }
    if(!name || !email){
        throw new Error("Name and Email are required for full update");
    }
    user.name = name;
    user.email = email;   
    return true;
}

export const deleteUserService = (id) => {
    const index = users.findIndex(u => u.id === id);
    if(index === -1){
        throw new Error("User not found");
    }
    users.splice(index, 1);
    return true;
}

