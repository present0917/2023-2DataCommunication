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
            { index: true, element: <PageOne /> },
            { path: "/one", element: <PageTwo /> },
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
