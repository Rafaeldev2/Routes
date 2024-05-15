import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Cadastro from "../Pages/Cadastro";
import Denuncias from "../Pages/Denuncias";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/Cadastro",
                element: <Cadastro />
            },
            {
                path: "/denuncias",
                element: <Denuncias />
            },
        ]
    },
])

export default router;