// import React from 'react';
import React, { Component } from 'react';
import LogEntry from './LogEntry';

function FoodLog(props) {
  const allLogs = props.allLogs;
  console.log('allLogs in foodLogDisplay', allLogs);

  const logEntries = allLogs.map((log, index) => {
    return <LogEntry log={log} key={`log ${index}`} />;
  });

  return (
    <div className='displayBox'>
      <h2>Food Log Entries</h2>
      {logEntries}
    </div>
  );
}

export default FoodLog;
