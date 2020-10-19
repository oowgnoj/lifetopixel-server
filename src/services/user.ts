import jwt from "jsonwebtoken";
import User from "../entity/User";


export const signup = async (email, password, username) =>{
    try{
      const user = new User()
    user.email = email
    user.password = password
    user.userName = username
    user.save()
    return user;
    }catch(error){
      console.error(error)
    }
  }

export const login = async (email, password) =>{
  
  const user = await User.findOne({email})
  console.log(user)
  if (!user){
    throw new Error('회원 정보를 확인해주세요.')
  }
  const isValid = await user.comparePassword(password)
  console.log(isValid)
  if (!isValid){
    throw new Error('회원 정보를 확인해주세요.')
  }
  
  if (user) {
    const token: String = generateToken(email);
    return { user, token };
  } else {
    throw new Error("회원정보를 확인해주세요.");
  }
}

export const generateToken = (email) =>{
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);
  return jwt.sign({ uid: email }, process.env.TOKEN_SECRET, {
    algorithm: "HS256",
  });
}
