import './App.css';
import { NavBar , Footer  } from './component';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import {Home , SignIn , Register , Resume} from './pages'
import ForgetPassword from './pages/ForgetPassword/ForgetPassword.jsx'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
<NavBar />
<Routes>
  <Route path ="/" element={<Home />} />
  <Route path ="/SignIn" element={<SignIn />} />
  <Route path ="/Register" element={<Register />} />
  <Route path ="/ForgetPassword" element={<ForgetPassword />} />
  <Route path ="/Resume" element={<Resume />} />
</Routes>
<Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
