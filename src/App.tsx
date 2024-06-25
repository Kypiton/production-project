import { Route, Routes, Link } from 'react-router-dom';
import { Suspense } from 'react';

import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

import useTheme from './theme/useTheme';

import './styles/index.scss';
import classNames from './helpers/classNames/classNames';

export default function App(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About site</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync />} />
          <Route path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      {/* <Counter /> */}
    </div>
  );
}
