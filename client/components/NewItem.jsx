import React, { Component } from 'react';

class NewItem extends Component {
  constructor(props) {
    super(props);
  }
  // handleSubmit = this.props.handleSubmit;
  render() {
    return (
      //USER INPUT
      //Name, FODMAP type, symptoms => bloating, diarrhea, gas, none
      <div>
        <form>
          <label htmlFor='foodItem'>Food Item</label>
          <input type='name' />

          <legend>FODMAP TYPES</legend>
          <input type='checkbox' id='fructans' name='fructans' />
          <label htmlFor='fructans'>Fructans</label>

          <input type='checkbox' id='galactans' name='galactans' />
          <label htmlFor='galactans'>Galactans</label>

          <input type='checkbox' id='fructose' name='fructose' />
          <label htmlFor='fructose'>Fructose</label>

          <input type='checkbox' id='lactose' name='lactose' />
          <label htmlFor='lactose'>Lactose</label>

          <input type='checkbox' id='polyols' name='polyols' />
          <label htmlFor='polyols'>Polyols</label>

          <legend>Symptoms</legend>
          <input type='checkbox' id='dia' name='dia' />
          <label htmlFor='dia'>Diarrhea</label>

          <input type='checkbox' id='gas' name='gas' />
          <label htmlFor='gas'>Gas</label>

          <input type='checkbox' id='bloating' name='bloating' />
          <label htmlFor='bloating'>Bloating</label>
          <input
            type='submit'
            value='Submit Log'
            onClick={this.props.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default NewItem;
