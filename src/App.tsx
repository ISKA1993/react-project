
import { Route, Routes, Link, } from "react-router-dom";
import { Suspense } from "react";
import './styles/index.scss'
import AboutPage from "./pages/AboutPage/AboutPage";
import Main from "./pages/Main/Main";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>0 сраница</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<Main />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App