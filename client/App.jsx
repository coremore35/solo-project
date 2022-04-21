import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import FoodLogDisplay from './components/FoodLogDisplay';
import NewItem from './components/NewItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allLogs: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const objKey = e.target.id;
    const value = e.target.value;
  }

  handleSubmit(e) {
    //method to grab the inputs
    console.log(e.target.value);
    const foodItem = document.getElementById('foodItem').value;
    const fodmapType = document.getElementById('fodmapType').value;
    const sympChecks = symptomsBoxes.querySelectorAll('input[type="checkbox"]');
    const symptoms = [];
    // console.log('symptoms', sympChecks);

    function grabSymptoms(obj) {
      obj.forEach((item) => {
        if (item.checked) {
          console.log(item);
          symptoms.push(item.name);
        }
      });
    }
    grabSymptoms(sympChecks);

    const todayDate = new Date().toDateString();

    const newLog = {
      foodItem: foodItem,
      fodmapType: fodmapType,
      symptoms: symptoms,
      date: todayDate,
    };
    // console.log('sym array', symptoms);

    // console.log(foodItem);
    // ???? NOt working
    const grabAllLogs = this.state.allLogs.slice();
    grabAllLogs.push(newLog);
    console.log(grabAllLogs);

    this.setState({
      allLogs: grabAllLogs,
    });

    console.log('state', this.state);
    // what updates my server/db
    // console.log('hit button');
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
        <FoodLogDisplay allLogs={this.state.allLogs} />
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
