import React from 'react';
import '../style.scss';
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes, Link, BrowserRouter} from "react-router-dom";
import Main from "./trainComponents/Main";

const App = () => {

    return ( <>
            <BrowserRouter>
                <h1>
                    React App
                </h1>

                {/*<Link to='/main'>*/}
                {/*    Main*/}
                {/*</Link>*/}

                <Routes>
                    <Route path='/' element={<Main />} />
                </Routes>

        </BrowserRouter>
    </>
    );
};

export default App;