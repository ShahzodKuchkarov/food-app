import SignUp from './containers/Auth/SignUp';
import Login from './containers/Auth/Login11';
import Home from './containers/Home';
import Products from './containers/Products';
import Add from './containers/Products/Add';
import Edit from './containers/Products/Edit';

const protectedURLs = [
  {
    path: '/',
    exact: true,
    component: Home,
    protected: true
  },
  {
    path: '/products',
    exact: true,
    component: Products,
    protected: true
  },
  {
    path: `/products/edit/:id`,
    exact: true,
    component: Edit,
    protected: true,
  },
  {
    path: '/products/add',
    component: Add,
    protected: true,
  }
];

const publicURLs = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/sign-up',
    exact: true,
    component: SignUp,
  },
];

export { publicURLs, protectedURLs };
