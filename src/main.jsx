// components imports
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'
// CSS Import
import './index.css'
// Library imports
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
        <Toaster />
    </BrowserRouter>
    
)
