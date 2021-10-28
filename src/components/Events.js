import React from 'react';

import Event from './Event';


const Events = ({ state, dispatch }) => {
  return (
    <>
      <h4 className="mt-5">一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>作品名</th>
            <th>一言紹介</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />)) }
        </tbody>
      </table>
    </>
  )
};

export default Events;
