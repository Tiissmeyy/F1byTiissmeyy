import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Classement from "../pages/Classement";
import Historique from "../pages/Historique";
import Contact from "../pages/Contact";
import Loader from "../assets/components/generics/Loader/Loader";
import classementLoader from "../loader/classementLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Loader />
    },
    {
        path: "/app",
        element: <App />,
        children: [
            {
                path: "/app/home",
                element: <Home /> 
            },
            {
                path: "/app/classement",
                element: <Classement />,
                loader: async () => {
                    const response = await fetch("https://ergast.com/api/f1/2023/driverStandings.json")
                    if(response.ok){
                        return await response.json(); 
                    }                     
                }
            },
            {
                path: "/app/historique",
                element: <Historique />,
            },
            {
                path: "/app/contact",
                element: <Contact />,
            }
        ]
    }
]) 