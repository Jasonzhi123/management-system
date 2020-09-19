// 按需加载
import Loadable from 'react-loadable';
import Loading from '@/components/loading/index';

const Layout = Loadable({
  loader: () => import('@/views/Layout/index'),
  loading: Loading
});

const Home = Loadable({
  loader: () => import('@/views/Home/index'),
  loading: Loading
});
const Login = Loadable({
  loader: () => import('@/views/Login/index'),
  loading: Loading
});

const NotFound = Loadable({
  loader: () => import('@/views/NotFound/404'),
  loading: Loading
});

export default {
  Layout,
  Login,
  NotFound,
  Home
}