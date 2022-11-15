import { createContext, useState } from "react";
import { App, Credentials } from "realm-web";
import { APP_ID } from "../realm/constants";
    
const app = new App(APP_ID);
 
export const UserContext = createContext();
 
export const UserProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 
 const emailPasswordLogin = async (email, password, name = "") => {
    const credentials = Credentials.emailPassword(email, password);
    const user = await app.logIn(credentials);

    setUser(user);

    let result = "";

    try{
      const mongo = user.mongoClient("atlas-custom-user-data");
      const db = mongo.db("auth_db")
      const collection = db.collection("users");

      const inserData = {
          _id: user.id,
          name: name, 
      };


      result = await collection.findOne(
        {_id: user.id},
        {}
      );

      if(result == null && name !== ""){
        result = await collection.insertOne(inserData);
        result = await collection.findOne(
          {_id: user.id},
          {}
        );
      }

    }catch(error){
      alert(error);
    }
    return result !== null ? result.name : "you";
 };

 const emailPasswordSignup = async (email, password) => {
   try {
     await app.emailPasswordAuth.registerUser({email, password});
     return "Confirmation mail resent. Please check your email inbox.";
   } catch (error) {
     throw error;
   }
 };

 const resendConfirmationMail = async (email) => {
    try {
      await app.emailPasswordAuth.resendConfirmationEmail({email});
      return "Confirmation mail sent. Please check your email inbox.";
    } catch (error) {
      throw error;
    }
  };

 const confirmNewUser = async (token, tokenId) => {
  try{
    await app.emailPasswordAuth.confirmUser({token, tokenId});
    return "User confirmed."
  }catch(error){
    throw error;
  }
}

 const sendPasswordResetMail = async (email) => {
    try{
      await app.emailPasswordAuth.sendResetPasswordEmail({email});
      return "Mail sent."
    }catch(error){
      throw error
    }
 }

 const resetPassword = async (token, tokenId, password) => {
    try{
      await app.emailPasswordAuth.resetPassword({token, tokenId, password});
      return "Password reset."
    }catch(error){
      throw error;
    }
 }

 const resendResetPassword = async (email) => {
    try{
      await app.emailPasswordAuth.sendResetPasswordEmail({email});
      return "Reset mail resent.";
    }catch(error){
      throw error;
    }

 }
 
 const fetchUser = async () => {
   if (!app.currentUser) return false;
   try {
     await app.currentUser.refreshCustomData();
     setUser(app.currentUser);
     return app.currentUser;
   } catch (error) {
     throw error;
   }
 }
 
 const logOutUser = async () => {
   if (!app.currentUser) return false;
   try {
     await app.currentUser.logOut();
     setUser(null);
     return true;
   } catch (error) {
     throw error
   }
 }
 
 return <UserContext.Provider value={{ user, setUser, fetchUser, emailPasswordLogin, emailPasswordSignup, logOutUser, sendPasswordResetMail, resetPassword, confirmNewUser, resendConfirmationMail, resendResetPassword }}>
   {children}
 </UserContext.Provider>;
}