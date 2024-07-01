import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from './routers/serviceRouter';

function App() {
    return (
        <div>
            {/*交给路由去管理*/}
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default App;
