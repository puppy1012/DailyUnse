import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./compoenent/MainPage";
import MainLayout from "./layout/MainLayout";
import FullPageSlides from "./compoenent/FullPageSlides/FullpageSlides";
import SignUpIntroPage from "./compoenent/SignUpIntroPage";
import GenderInputPage from "./compoenent/GenderInputPage.tsx";
import BirthInputPage from "./compoenent/BirthInputPage.tsx";
import TimeInputPage from "./compoenent/TimeInputPage.tsx";
import SearchPage from "./compoenent/SearchPage";
import FortuneForm from "./compoenent/FortuneForm";
const AuthenticationApp = lazy(()=>import("authenticationApp/App"));
const NavigationBarApp=lazy(()=> import("navigationBarApp/App"));
const WeatherForecastApp=lazy(()=>import("weatherForecastApp/App"));

function App() {

    return (
        <BrowserRouter>
            <Suspense fallback={<CircularProgress />}>
                <Routes>
                    <Route path="/" element={<MainLayout><MainPage /></MainLayout>}/>
                    <Route path="/fullpage"element={<MainLayout><FullPageSlides /></MainLayout>}/>
                    <Route path="/authentication" element={<MainLayout><AuthenticationApp /></MainLayout>} />
                    <Route path="/weather-forecast" element={<WeatherForecastApp />} />
                    <Route path="/navigation-bar" element={<NavigationBarApp />} />
                    <Route path="/start-jeomsin" element={<MainLayout><SignUpIntroPage /></MainLayout>} />
                    <Route path="/step2" element={<MainLayout><GenderInputPage /></MainLayout>} />
                    <Route path="/step3" element={<MainLayout><BirthInputPage /></MainLayout>} />
                    <Route path="/step4" element={<MainLayout><TimeInputPage /></MainLayout>} />
                    <Route path="/search" element={<MainLayout><SearchPage /></MainLayout>} />
                    <Route path="/about" element={<MainLayout><FortuneForm/></MainLayout>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;

const container = document.getElementById("app") as HTMLElement;
if (!container) {
    throw new Error("Root container #app not found");
}

const root = ReactDOM.createRoot(container);
root.render(<App />);