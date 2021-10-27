import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div className="container">
      <h4 className="mt-5">紹介ページ作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">作品名</label>
          <input className="form-control" id="formEventTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">一言紹介</label>
          <textarea className="form-control" id="formEventBody" />
        </div>

        <button className="btn btn-primary">作成する</button>
        <button className="btn btn-danger">全て削除する</button>
      </form>

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

        </tbody>
      </table>
    </div>
  );
};

export default App;

