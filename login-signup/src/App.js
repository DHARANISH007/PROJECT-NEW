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
import Header from './Header';
import Home from './Components/LoginSignup/Home';
import { Login } from './Components/LoginSignup/Login';
import { Signup } from './Components/LoginSignup/Sign';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='log' element={<Login/>} />
          <Route path='sig' element={<Signup/>} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Header />
      </Router>
    </div>
  );
}

export default App;

