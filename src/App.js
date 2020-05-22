import React from "react";
import { Layout } from 'antd'

import { MenuNav } from './components'
import { RootRouter } from "./router";

import './css'

function App() {
  return (
    <div className="_app">
      <Layout>
        <RootRouter />
      </Layout>
    </div>
  );
}

export default App;