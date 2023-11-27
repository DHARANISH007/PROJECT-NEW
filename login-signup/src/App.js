// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { LoginSignup } from './Components/LoginSignup/LoginSignup';
// import Header from './Header';
// import Home from './Components/LoginSignup/Home';

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path='logsig' element={<LoginSignup/>}/>
//         <Route path='/' element={<Home/>}/>
//       </Routes>
//       <Header/>
//       <Home/>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Header from './Userdashboard/Header';
import Home from './Components/LoginSignup/Home';
import { Login } from './Components/LoginSignup/Login';
import { Signup } from './Components/LoginSignup/Sign';
import About from './Userdashboard/About';
import ContactUs from './Components/LoginSignup/Contact';
import {Cakes} from './Userdashboard/Cakes';
// import PerfumeProducts from './Userdashboard/PerfumeProducts';
import PerfumeProducts from './Userdashboard/PerfumeProducts';
import { PureComponent } from 'react';
import PursesSelector from './pages/PurseSelector';
import AddToCartPage from './pages/Addtocart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='pur' element={<PursesSelector/>}/>
          <Route path='Cart' element={<AddToCartPage/>}/>
          <Route path='log' element={<Login/>} />
          <Route path='sig' element={<Signup/>} />
          <Route path='abt' element={<About/>} />
          <Route path='con' element={<ContactUs/>} />
          <Route path='Cakes'element={<Cakes/>}/>
          <Route path='per' element={<PerfumeProducts/>}/>
          <Route path='/' element={<Home />} />
        </Routes>
        <Header />
      </Router>
    </div>
  );
}

export default App;

