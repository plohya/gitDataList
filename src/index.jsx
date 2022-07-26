import React from "react";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
import App from "./components/App.jsx";
import {store} from './state/store';
import {Provider} from "react-redux";

root.render(<Provider store={store}><App /></Provider>);