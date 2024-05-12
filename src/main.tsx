import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store/store.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import RecipeDetailPage from "./pages/RecipeDetailPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/detail/:recipeId",
        element: <RecipeDetailPage/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
