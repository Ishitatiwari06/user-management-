import { users } from '../data/users.js';
import { createUserService, updateUserService, deleteUserService } from '../services/user.services.js';
export const getUsers = (req, res) => {
    const token=req.headers;
    console.log("token",token);
    
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
}

export const createUser = (req, res) => {
    try{
        const { name, email } = req.body;
        console.log("user created");
        
        const newUser=createUserService(name, email);
        res.status(201).json({
            success: true,
            data: newUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }  
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    console.log("update user function",name,email);
    
    const user = updateUserService(id, name, email);  
    if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }
  res.status(200).json({
    success: true,
    data: user
  });
    
}

export const partialUpdate = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = users.find(u => u.id === id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
    // Partial update
    if(name) user.name = name;
    if(email) user.email = email;

    res.status(200).json({
        success: true,
        data: user
    });
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const deleted = deleteUserService(id);
     if (!deleted) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    message: "User deleted successfully"
  });
}

