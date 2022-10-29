import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { App } from "realm-web";
import { APP_ID } from "../realm/constants";
 
const Signup = () => {
 const navigate = useNavigate();
 const location = useLocation();
 
 // As explained in the Login page.
 const { emailPasswordSignup } = useContext(UserContext);
 const [form, setForm] = useState({
    name: "",
   email: "",
   password: ""
 });
 
 // As explained in the Login page.
 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };
 
 
 // As explained in the Login page.
 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/");
 }
 
 // As explained in the Login page.
 const onSubmit = async () => {
   try {
    //https://realm.mongodb.com/groups/635beabea043b419bbef7afa/apps/635bec53152200674f1871ed/auth/users
    //https://www.mongodb.com/docs/realm/sdk/node/examples/manage-email-password-users/#std-label-node-register-new-user
    //https://www.mongodb.com/docs/realm/web/create-delete-user/
     const user = await emailPasswordSignup(form.email, form.password);
     if (user) {
        localStorage.setItem(form.email, form.name);
        console.log(localStorage.getItem(form.email));
        redirectNow();
     }
   } catch (error) {
     alert(error);
   }
 };
 
 return <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto" }}>
   <h1>Signup</h1>
   <TextField
     label="Name"
     type="name"
     variant="outlined"
     name="name"
     value={form.name}
     onInput={onFormInputChange}
     style={{ marginBottom: "1rem" }}
   />
   <TextField
     label="Email"
     type="email"
     variant="outlined"
     name="email"
     value={form.email}
     onInput={onFormInputChange}
     style={{ marginBottom: "1rem" }}
   />
   <TextField
     label="Password"
     type="password"
     variant="outlined"
     name="password"
     value={form.password}
     onInput={onFormInputChange}
     style={{ marginBottom: "1rem" }}
   />
   <Button variant="contained" color="primary" onClick={onSubmit}>
     Signup
   </Button>
   <p>Have an account already? <Link to="/login">Login</Link></p>
 </form>
}
 
export default Signup;