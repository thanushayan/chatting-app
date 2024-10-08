import JWT from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId,res) =>{
    const token = JWT.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '15d'
    })

     res.cookie("jwt",token,{
        maxAge: 15 * 24* 60*60*1000, //MS
        httponly:true, //prevent XSS attacks cross-site scripting attacks
        sameSite:"strict", //CSRF attacks cross-site request forgery attacks 
        secure:process.env.NODE_ENV !== "development" , //cookie only works in https

     })

}
export default generateTokenAndSetCookie;