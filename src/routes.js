import React from 'react';
import { Route, Switch} from 'react-router-dom';

import home from './pages/home';
import cart from './pages/cart';

export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={home} />
      <Route path="/cart" exact component={cart} />
    </Switch>
  );
}
