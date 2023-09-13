// components imports
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'
// CSS Import
import './index.css'
// Library imports
import ReactDOM from 'react-dom/client';
import Store from './Redux/Store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider Store = {Store}>

        <BrowserRouter>
            <App />
            <Toaster />
        </BrowserRouter>
        
    </Provider>
    
)
