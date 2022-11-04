import { ObjectID } from "bson";
import { createContext, useState } from "react";
import { App, Credentials } from "realm-web";
import { APP_ID } from "../realm/constants";
 
// Creating a Realm App Instance
const app = new App(APP_ID);
 
// Creating a user context to manage and access all the user related functions
// across different components and pages.
export const UserContext = createContext();
 
export const UserProvider = ({ children }) => {
 const [user, setUser] = useState(null);
 
 // Function to log in user into our App Service app using their email & password
 const emailPasswordLogin = async (email, password) => {
    const credentials = Credentials.emailPassword(email, password);
    const user = await app.logIn(credentials);

    setUser(user);

    try{
      
      
      

      const mongo = user.mongoClient("atlas-custom-user-data");
      const db = mongo.db("auth_db")
      const collection = db.collection("users");

      const filter = {
        _id: user.id, 
      };

      const updateDoc = {
          _id: user.id,
          name: "BEN", 
      };

      //const result = await collection.updateOne(filter, updateDoc);
      const result= await collection.insertOne(updateDoc);
      // const result= await collection.findOne(
      //   {},
      //   {userID : user.id},
      // );
      //const result = await collection.find();
      console.log(result);

      //https://realm.mongodb.com/groups/635beabea043b419bbef7afa/apps/635bec53152200674f1871ed/auth/users
      //https://cloud.mongodb.com/v2/635beabea043b419bbef7afa#metrics/replicaSet/635bec2a7f47f94d7c3a5895/explorer/auth_db/users/find
      //https://www.mongodb.com/docs/guides/crud/insert/


    }catch(error){
      alert(error);
    }
    

    return user;
 };
 
 // Function to sign up user into our App Service app using their email & password
 const emailPasswordSignup = async (email, password) => {
   try {
      console.log(email,password)
     await app.emailPasswordAuth.registerUser({email, password});
     // Since we are automatically confirming our users, we are going to log in
     // the user using the same credentials once the signup is complete.
     return emailPasswordLogin(email, password);
   } catch (error) {
     throw error;
   }
 };

 const userData = async({email, password}) => {
  try{
    // const credentials = Credentials.emailPassword(email, password);
    // console.log(email, password);
    // const user = await app.logIn(credentials);
    // const mongo = user.mongoClient("<atlas service name>");
    // const collection = mongo.db("<database name>").collection("<collection name>");
    // return collection.findOne();
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
 
 return <UserContext.Provider value={{ user, setUser, fetchUser, emailPasswordLogin, emailPasswordSignup, logOutUser, userData }}>
   {children}
 </UserContext.Provider>;
}