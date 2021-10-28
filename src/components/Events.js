import React, { useContext } from 'react';

import Event from './Event';
import AppContext from '../contexts/AppContext';


const Events = () => {
  const { state } = useContext(AppContext);

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
          { state.events.map((event, index) => (<Event key={index} event={event} />)) }
        </tbody>
      </table>
    </>
  )
};

export default Events;
