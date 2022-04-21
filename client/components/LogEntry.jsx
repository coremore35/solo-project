import React from 'react';

const LogEntry = (props) => {
  const { foodItem, fodmapType, symptoms, date } = props.log;

  const displaySymptoms = symptoms.map((el) => {
    return <li>{el}</li>;
  });
  // console.log('foodItem:', props.log.foodItem);

  return (
    <div className='logEntry'>
      <p>
        <b>Date:</b> {date}
      </p>
      <p>
        <b>Food Item:</b> {foodItem}
      </p>
      <p>
        <b>Fodmap Type:</b> {fodmapType}
      </p>
      <div>
        <b>Symptoms:</b>
        <ul>{displaySymptoms}</ul>
      </div>
    </div>
  );
};

export default LogEntry;
