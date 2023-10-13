const jwt=require('jsonwebtoken')

// create jwt token for Authentication 

const createToken = async (_id) => {
    try {
      const payload = { _id };
      const token = await jwt.sign(payload, 'yourSecretKey', { expiresIn: 604800 });
      return token;
    } catch (error) {
      console.log(error.message);
    }
  }
  
module.exports= createToken