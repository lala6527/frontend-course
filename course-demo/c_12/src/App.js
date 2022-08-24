import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from './components';
import { Toast, ToastProvider } from "./components/providers/Toast";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import './styles/global.scss';

const App = () => {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
