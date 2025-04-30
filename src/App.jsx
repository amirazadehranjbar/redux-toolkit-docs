// src/App.jsx
import Sidebar    from "./components/Sidebar.jsx";
import Header     from "./components/Header.jsx";
import Footer     from "./components/Footer.jsx";
import AppRouter  from "./router/AppRouter.jsx";

const App = () => (
    <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <main className="p-4">
                    <AppRouter />
                </main>
            </div>
        </div>
        <Footer />
    </div>
);

export default App;
