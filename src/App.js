import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import './App.css';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import Layout from './Layout/Layout';
import Error from './Pages/Error';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Home from './Pages/Home';
import TestPage from './Pages/TestPage';
import WritePostPage from './Pages/WritePostPage';
import ReservationPage from './Pages/ReservationPage';

import Detail from './Pages/Detail';
import TestCaver from './testcaver';

library.add(fas)


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: </>,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Layout />,
          children: [
            { index: true, element: <Home /> },
            { path: '/detail/:id', element: <Detail /> },
            { path: "/one", element: <PageOne /> },
            { path: "/two", element: <PageTwo /> },
            { path: "/test", element: <TestPage /> },
            { path: "/write", element: <WritePostPage/>},
            { path: "/res/:id", element: <ReservationPage/>},
            { path: "/testcaver", element: <TestCaver/>},
          ],
        },
      ],
    },
  ]);
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
