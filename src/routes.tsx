import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<PageWrapper><Login /></PageWrapper>} />
      <Route path='/home' element={<PageWrapper><Home /></PageWrapper>} />
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
