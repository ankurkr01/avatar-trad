const bcrypt=require('bcrypt')

// hash password  function for secure password

const securepassword=async(password)=>{
    try {
        const hashPassword=await bcrypt.hash(password,10)
        return hashPassword
    } catch (error) {
        
    }
}

module.exports=securepassword