let success = true;
export const checkAuth = (req, res, next) => {
    if (success) {
    console.log("Auth check");
    next();
    } else {
        console.log("Auth failed");
        return res.status(401).json({ message: "Unauthorized" });
    }  
}

export const validatePut=(req,res,next)=>{
    const {id}=req.params;
    
    if(!id || id.length<5){
        return res.status(400).json({
            success:false,
            message:"Name and Email are required"
        });
    }
    next();
}

export const validatePatch=(req,res,next)=>{
    const {id}= req.params;
    console.log(id);
    
    if(!id || id.length<5){
        return res.status(400).json({
            success:false,
            message:"Invalid ID"
        });
    }
    next();
}

export const validate = (schema) => (req, res, next) => {
    let result = schema.safeParse(req.body);
    console.log("Body parsing using ZOD..!!");
    console.log("Result: ", result);
    
    
    if(!result.success){
        return res.status(400).json({
            success: false,
            errors: result.error.message,
            message: "Create User Zod failed"
        })
    }
    next();
    
}
    