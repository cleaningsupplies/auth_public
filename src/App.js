import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import Confirm from "./pages/Confirm.page";
import Forgot from "./pages/Forgot.page";
import Home from "./pages/Home.page";
import Mailsent from "./pages/Mailsent.page";
import PrivateRoute from "./pages/PrivateRoute.page";
import Reset from "./pages/Reset.page";
import Signin from "./pages/Signin.page";
import Signup from "./pages/Signup.page";
 
function App() {

  const [name, setName] = useState("");
  
  function getName(email){
    setName(email);
  }

 return (
   <BrowserRouter>
     <UserProvider>
       <Routes>
         <Route exact path="/signin" element={<Signin getName={getName} />} />
         <Route exact path="/signup" element={<Signup getName={getName} />} />
         <Route exact path="/forgot" element={<Forgot/>} />
         <Route exact path="/reset" element={<Reset/>} />
         <Route exact path="/confirm" element={<Confirm getName={getName} />} />
         <Route exact path="/mailsent" element={<Mailsent />} />
         <Route element={<PrivateRoute />}>
           <Route exact path="/" element={<Home name={name} />} />
         </Route>
       </Routes>
     </UserProvider>
   </BrowserRouter>
 );
}
 
export default App;
