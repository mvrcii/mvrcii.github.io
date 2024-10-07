import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Slot} from "../components/Slot";
import {MainContent} from "../components/main/MainContent";
import {ErrorPage} from "../components/misc/ErrorPage.tsx";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Slot/>}>
                    <Route index element={<MainContent/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    );
}
