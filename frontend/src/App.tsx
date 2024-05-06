import './App.css';
import {Outlet, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import Homepage from "./routes/Homepage.tsx";
import Example from "./routes/Example.tsx";
import Navbar from "./components/Navbar.tsx";
import Projects from "./routes/Projects.tsx";
import Contact from "./routes/Contact.tsx";
import ViewContacts from "./routes/ViewContacts.tsx";


function App() {
    const router = createBrowserRouter([

        {
            path: "/",
            errorElement: <h2>Something went wrong!</h2>,
            element: <Root />,
            children: [
                {
                    path: "/",
                    errorElement: <h2>Something went wrong!</h2>,
                    element: <Homepage />,
                },
                {
                    path: "/example",
                    errorElement: <h2>Something went wrong!</h2>,
                    element: <Example />,
                },
                {
                    path: "/projects",
                    errorElement: <h2>Something went wrong!</h2>,
                    element: <Projects />,
                },
                {
                    path: "/contact",
                    errorElement: <h2>Something went wrong!</h2>,
                    element: <Contact />,
                },
                {
                    path: "/view-contacts",
                    errorElement: <h2>Something went wrong!</h2>,
                    element: <ViewContacts />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;

    function Root() {
        return (
            <div className="w-screen h-screen flex flex-col bg-blue-50 items-center">
                <Navbar />
                <Outlet />
            </div>
        );
    }
}

export default App;
