import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import Confirm from "./pages/Confirm.page";
import Forgot from "./pages/Forgot.page";
import Home from "./pages/Home.page";
import Mailsent from "./pages/Mailsent.page";
import MailsentReset from "./pages/MailsentReset.page";
import PrivateRoute from "./pages/PrivateRoute.page";
import Reset from "./pages/Reset.page";
import Signin from "./pages/Signin.page";
import Signup from "./pages/Signup.page";
 
function App() {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  
  function getName(name){
    setName(name);
  }

  function getMail(mail){
    setMail(mail);
  }

 return (
   <BrowserRouter>
     <UserProvider>
       <Routes>
         <Route exact path="/signin" element={<Signin getName={getName} />} />
         <Route exact path="/signup" element={<Signup getMail={getMail} />} />
         <Route exact path="/forgot" element={<Forgot getMail={getMail}/>} />
         <Route exact path="/reset" element={<Reset/>} />
         <Route exact path="/confirm" element={<Confirm getName={getName}/>} />
         <Route exact path="/mailsent" element={<Mailsent mail={mail}/>} />
         <Route exact path="/mailsentreset" element={<MailsentReset mail={mail}/>} />
         <Route element={<PrivateRoute />}>
           <Route exact path="/" element={<Home name={name} />} />
         </Route>
       </Routes>
     </UserProvider>
   </BrowserRouter>
 );
}
 
export default App;
