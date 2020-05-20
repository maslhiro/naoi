import React from "react";
import { Layout } from 'antd'

import { MenuNav } from './components'
import { Home } from './pages'

import './css'

function App() {
  return (
    <div className="_app">
      <Layout>
        <MenuNav />

        <Home/>

      </Layout>
    </div>
  );
}

export default App;