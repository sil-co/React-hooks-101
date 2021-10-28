import React, { useState, useContext } from 'react';

import { CREATE_EVENT, DELETE_ALL_EVENTS, ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    });

    dispatch({
      type: ADD_OPERATION_LOG,
      description: '一言を追加しました。',
      operatedAt: timeCurrentIso8601()
    })

    setTitle('');
    setBody('');
  };

  const deleteAllEvent = e => {
    e.preventDefault();
    const result = window.confirm('全て削除しても大丈夫ですか？');
    if (result) {
      dispatch({ type: DELETE_ALL_EVENTS });
      dispatch({
        type: ADD_OPERATION_LOG,
        description: '全てのデータを削除しました。',
        operatedAt: timeCurrentIso8601()
      })
    }
  };

  const unCreatable = title === '' || body === '';

  return (
    <>
      <h4 className="mt-5">作品紹介ページ作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">作品名</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">一言紹介</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvent} disabled={state.events.length === 0}>全て削除する</button>
      </form>
    </>
  )
}

export default EventForm;
