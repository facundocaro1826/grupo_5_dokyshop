const { compareSync } = require('bcryptjs');
const { loadData } = require('../../data');
const {validationResult} = require("express-validator")


module.exports = (req, res)=>{
   const errors = validationResult(req)

   if(errors.isEmpty()){ 

   const {email, password, remember} = req.body; 
   const users = loadData("users");  // todos lo sdatos de .json

   if(!email){
     return res.send("Debe ingresar un email!") 
   }

   const userFind = users.find((u)=> u.email === email) // busca coincidencia del email que llega del body con el email del json 
    
   if(!userFind){
     res.send("El usuario no existe!")
   }

   isValidPassword = compareSync(password, userFind.password) 
   
   if(!isValidPassword){
       res.send("Credenciales invalidas!")
   }
    const {name,role, avatar} = userFind
   req.session.userLogin = {
      name,
      email,
      role,
      avatar
};

   if(remember){
      res.cookie("userLogin", req.session.userLogin, {maxAge: 6000 *30})
   }
   res.redirect("/");
}
res.render("./authentication/login", {
   old: req.body, 
   errorsLog: errors.mapped()
})

}