import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white',
  };

  return (
    <div>
      <h3>사용자 목록 :</h3>
      <ul>
        <li>
          <NavLink to="/profiles/leeheeae" activeStyle={activeStyle}>
            이희애
          </NavLink>
        </li>
        <li>
          <NavLink to="/profiles/gildong" activeStyle={activeStyle}>
            홍길동
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
