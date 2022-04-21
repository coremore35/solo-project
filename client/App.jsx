import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import FoodLog from './components/FoodLog';
import NewItem from './components/NewItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log('hit button');
    e.preventDefault();
  }
  // componentDidMount() {
  //   fetch('/home/');
  // }

  render() {
    return (
      <div className='router'>
        <h1>Food Tracker</h1>
        <button>Add New Log</button>
        <NewItem handleSubmit={this.handleSubmit} />
        <FoodLog />
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
{
  /* <Routes>
          <Route path='fructans' element={<Fructans />}></Route>
        </Routes>
        <Link to='/fructans'>Fructans</Link> */
}
{
  /* <Link to='/galactans'>Galactans</Link>
        <Link to='/lactose'>Lactose</Link>
        <Link to='/fructose'>Fructose</Link>
        <Link to='/sorbitol'>Sorbitol/Mannitol</Link> */
}
