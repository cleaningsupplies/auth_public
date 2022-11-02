import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import Forgot from "./pages/Forgot.page";
import Home from "./pages/Home.page";
import PrivateRoute from "./pages/PrivateRoute.page";
import Signin from "./pages/Signin.page";
import Signup from "./pages/Signup.page";
 
function App() {

  const [name, setName] = useState("");
  
  function getName(email){
    setName(localStorage.getItem(email));
  }

 return (
   <BrowserRouter>
     <UserProvider>
       <Routes>
         <Route exact path="/signin" element={<Signin getName={getName} />} />
         <Route exact path="/signup" element={<Signup getName={getName} />} />
         <Route exact path="/forgot" element={<Forgot/>} />
         <Route element={<PrivateRoute />}>
           <Route exact path="/" element={<Home name={name} />} />
         </Route>
       </Routes>
     </UserProvider>
   </BrowserRouter>
 );
}
 
export default App;
