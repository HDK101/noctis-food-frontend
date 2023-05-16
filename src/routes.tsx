import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
