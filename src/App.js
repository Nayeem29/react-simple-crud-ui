import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import UpdateUser from "./Components/Home/User/UpdateUser/UpdateUser";
import User from "./Components/Home/User/User";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path="/user/update/:id" element={<UpdateUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
