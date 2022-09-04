import { BrowserRouter, Route, Routes } from "react-router-dom";
import{Header} from'./components/Header';
import{Footer} from'./components/Footer';
import{Home} from"./pages/home";
import{About} from"./pages/about";
import{Contact} from"./pages/contact";
import'./styles/global.scss';

const App=() =>{
  return(
    <BrowserRouter>
     <Header/> 
    <Routes>
    <Route path="contact" element={<Contact/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="/" element={<Home/>}/>
    </Routes>
     <Footer />
    </BrowserRouter>
   
  );
}
export default App;
