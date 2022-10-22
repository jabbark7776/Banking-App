import "./Component/BankCss.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from "./Component/Home"
import {HomeLogin} from "./Component/HomeLogin"
import {Nav} from "./Component/Nav"
import {Banking} from "./Component/Banking/Banking"
import {Cards} from "./Component/Cards/Cards"
import {Loans} from "./Component/Loans/Loans"
import {Support} from "./Component/Support"
import { Registration } from "./Component/Banking/Registration"


function App() {
  return (
    <div className="main">
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/banking" element={<Banking/>} />
    <Route path="/cards" element={<Cards/>} />
    <Route path="/loans" element={<Loans/>} />
    <Route path="/support" element={<Support/>} />
    <Route path="/homeLogin" element={<HomeLogin/>} />
    <Route path="/registration" element={<Registration/>} />
    
   </Routes>
   </BrowserRouter>
      
    </div>
  );
}

export default App;
