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
      <div className='form-container'>
        <form>
          <label htmlFor='foodItem'>
            <b>Food Item: </b>
          </label>
          <input type='name' id='foodItem' placeholder='e.g. bread' />

          <legend className='category'>
            <b>FODMAP TYPES: </b>

            <select id='fodmapType'>
              <option value='fructans'>Fructans</option>
              <option value='galactans'>Galactans</option>
              <option value='lactose'>Lactose</option>
              <option value='fructose'>Fructose</option>
              <option value='polyols'>Polyols</option>
            </select>
          </legend>
          <legend className='category'>
            <b>Symptoms</b>
          </legend>
          <div id='symptomsBoxes'>
            <input type='checkbox' id='dia' name='diarrhea' />
            <label htmlFor='dia'>
              Diarrhea &#128701; &#128169; <br></br>{' '}
            </label>

            <input type='checkbox' id='gas' name='gas' />
            <label htmlFor='gas'>
              Gas &#128165; &#x1F4A8;<br></br>{' '}
            </label>

            <input type='checkbox' id='bloating' name='bloating' />
            <label htmlFor='bloating'>
              Bloating &#x1FAC3;<br></br>{' '}
            </label>
          </div>
          <input
            className='button'
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
