import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Introduction from "./pages/Introduction.jsx";
import Installation from "./pages/Installation.jsx";
import StoreSetup from "./pages/StoreSetup.jsx";

const App = () => {

    return (
        <BrowserRouter>
            <div className="flex">
                <Sidebar/>
                <div className="flex-1">
                    <Header/>
                    <div className="p-4">
                        <Routes>
                            <Route path="/" element={<Introduction/>}/>
                            <Route path="/installation" element={<Installation/>}/>
                            <Route path="/store-setup" element={<StoreSetup/>}/>
                            {/* مسیرهای دیگه مستندات رو اینجا اضافه می‌کنیم */}
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
