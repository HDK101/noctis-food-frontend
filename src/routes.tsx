import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import Login from './pages/Login';
import Order from './pages/Order';
import Register from './pages/Register';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<PageWrapper><Login /></PageWrapper>} />
      <Route path='/register' element={<PageWrapper><Register /></PageWrapper>} />
      <Route path='/home' element={<PageWrapper><Home /></PageWrapper>} />
      <Route path='/order' element={<PageWrapper><Order.Index /></PageWrapper>} />
      <Route path='/order/:id' element={<PageWrapper><Order.Read /></PageWrapper>} />
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
