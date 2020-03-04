import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample'

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <NavLink to="/profiles/Jell"
            activeStyle={{ background: 'black', color: 'white' }}>Jell</NavLink>
          {/* NavLink는 선택된 경로에 적용할 수 있는 클래스를 넣어준다. */}
        </li>
        <li>
          <NavLink to="/profiles/gildong"
            activeStyle={{ background: 'black', color: 'white' }}>gildong</NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;