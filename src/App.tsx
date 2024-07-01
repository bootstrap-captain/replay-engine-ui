import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from './routers/serviceRouter';
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return (
        <div>
            <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
            </Provider>
        </div>
    )
}

export default App;
