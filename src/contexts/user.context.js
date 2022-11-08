import { createContext, useState } from "react";
import { App, Credentials } from "realm-web";
import { APP_ID } from "../realm/constants";
//https://realm.mongodb.com/groups/635beabea043b419bbef7afa/apps/635bec53152200674f1871ed/auth/users
//https://cloud.mongodb.com/v2/635beabea043b419bbef7afa#metrics/replicaSet/635bec2a7f47f94d7c3a5895/explorer/auth_db/users/find
 
// Creating a Realm App Instance
const app = new App(APP_ID);
 
// Creating a user context to manage and access all the user related functions
// across different components and pages.
export const UserContext = createContext();
 
export const UserProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 
 // Function to log in user into our App Service app using their email & password
 const emailPasswordLogin = async (email, password, name = "") => {
    const credentials = Credentials.emailPassword(email, password);
    const user = await app.logIn(credentials);

    setUser(user);

    let result = "you";

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

//  const findResult = async (collection, userID) => {
//     return await collection.findOne(
//       {_id: userID},
//       {}
//     );
//  }
 
 // Function to sign up user into our App Service app using their email & password
 const emailPasswordSignup = async (email, password) => {
 //const emailPasswordSignup = async (email, password, name) => {
   try {
     await app.emailPasswordAuth.registerUser({email, password});
     // Since we are automatically confirming our users, we are going to log in
     // the user using the same credentials once the signup is complete.
     return "Confirmation mail resent. Please check your email inbox.";
     //return emailPasswordLogin(email, password, name);
   } catch (error) {
     throw error;
   }
 };

 const resendConfirmationMail = async (email) => {
  //const emailPasswordSignup = async (email, password, name) => {
    try {
      await app.emailPasswordAuth.resendConfirmationEmail({email});
      // Since we are automatically confirming our users, we are going to log in
      // the user using the same credentials once the signup is complete.
      return "Confirmation mail sent. Please check your email inbox.";
      //return emailPasswordLogin(email, password, name);
    } catch (error) {
      throw error;
    }
  };

 const confirmNewUser = async (token, tokenId) => {
  try{
    await app.emailPasswordAuth.confirmUser({token, tokenId});
    return "User confirmed"
  }catch(error){
    throw error;
  }
}

 const sendPasswordResetMail = async (email) => {
    try{
      await app.emailPasswordAuth.sendResetPasswordEmail({email});
      return "Mail sent!"
    }catch(error){
      throw error
    }
 }

 const resetPassword = async (token, tokenId, password) => {
    try{
      await app.emailPasswordAuth.resetPassword({token, tokenId, password});
      return "Password reset!"
    }catch(error){
      throw error;
    }
 }
 
 // Function to fetch the user (if the user is already logged in) from local storage
 const fetchUser = async () => {
   if (!app.currentUser) return false;
   try {
     await app.currentUser.refreshCustomData();
     // Now, if we have a user, we are setting it to our user context
     // so that we can use it in our app across different components.
     setUser(app.currentUser);
     return app.currentUser;
   } catch (error) {
     throw error;
   }
 }
 
 // Function to logout user from our App Services app
 const logOutUser = async () => {
   if (!app.currentUser) return false;
   try {
     await app.currentUser.logOut();
     // Setting the user to null once loggedOut.
     setUser(null);
     return true;
   } catch (error) {
     throw error
   }
 }
 
 return <UserContext.Provider value={{ user, setUser, fetchUser, emailPasswordLogin, emailPasswordSignup, logOutUser, sendPasswordResetMail, resetPassword, confirmNewUser, resendConfirmationMail }}>
   {children}
 </UserContext.Provider>;
}