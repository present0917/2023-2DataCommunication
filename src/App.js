import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import './App.css';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import Layout from './Pages/Layout';
import Error from './Pages/Error';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
            { path: "my", element: <PageTwo /> },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <Button>button</Button>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
