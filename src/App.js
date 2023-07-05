import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Products from './Products';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'

function App() {
  return (
    

<main>
  <Router>
   <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path='/product' element={<Products />} />
      </Routes> 
      </Router>

  </main>

 
  );
}
    

export default App;
