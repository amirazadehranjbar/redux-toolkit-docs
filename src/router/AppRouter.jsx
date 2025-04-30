// src/router/AppRouter.jsx
import { Routes, Route }   from 'react-router-dom';

import BestPractices from "../pages/BestPractices.jsx";
import Introduction from "../pages/Introduction.jsx";
import GettingStarted from "../pages/GettingStarted.jsx";
import Installation from "../pages/Installation.jsx";
import StoreSetup from "../pages/StoreSetup.jsx";
import CreateSlice from "../pages/CreateSlice.jsx";
import CreateAsyncThunk from "../pages/CreateAsyncThunk.jsx";
import RTKQuery from "../pages/RTKQuery.jsx";
import Example1 from "../pages/examples/Example1.jsx";
import Example2 from "../pages/examples/Example2.jsx";


export default function AppRouter() {
    return (
        <Routes>
            <Route path="/"                 element={<Introduction />} />
            <Route path="/getting-started"  element={<GettingStarted />} />
            <Route path="/installation"     element={<Installation />} />
            <Route path="/store-setup"      element={<StoreSetup />} />
            <Route path="/create-slice"     element={<CreateSlice />} />
            <Route path="/create-async-thunk" element={<CreateAsyncThunk />} />
            <Route path="/rtk-query"         element={<RTKQuery />} />
            <Route path="/best-practices"    element={<BestPractices />} />
            <Route path="/examples/example1" element={<Example1 />} />
            <Route path="/examples/example2" element={<Example2 />} />
        </Routes>
    )
}
