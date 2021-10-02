import { useEffect, useState } from 'react';

import { MovieCard } from './components/MovieCard';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { GenresContextProvider } from './components/GenresContext';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GenresContextProvider>
        <SideBar/>
        <Content/>
      </GenresContextProvider>
    </div>
  )
}