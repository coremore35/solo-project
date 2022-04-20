import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Fructans from './components/Fructans';
class App extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   fetch('/home/');
  // }

  render() {
    return (
      <div className='router'>
        <h1>Food Tracker</h1>
        <Routes>
          <Route path='fructans' element={<Fructans />}></Route>
        </Routes>
        <Link to='/fructans'>Fructans</Link>
        {/* <Link to='/galactans'>Galactans</Link>
        <Link to='/lactose'>Lactose</Link>
        <Link to='/fructose'>Fructose</Link>
        <Link to='/sorbitol'>Sorbitol/Mannitol</Link> */}
      </div>
    );
  }
}

export default App;

{
  /* <Routes>
<Route path='/' element={<App />}>
<Route path='fructans' element={<Fructans />}></Route>
/* <Route path='galactans' element={<Galactans />}>
  
</Route>
<Route path='lactose' element={<Lactose />}>
  
</Route>
<Route path='fructose' element={<Fructose />}>
  
</Route>
<Route path='sorbitol' element={<Sorbitol />}>
</Route> 
</Route>
</Routes> */
}
