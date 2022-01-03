import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';
import Review from '../views/pages/review';

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/review': Review,
  '/detail/:id': Detail,
};

export default routes;
