import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

/*
  React路由的基本使用
  Router组件：包裹整个应用，一个React应用只需要使用一次
  两种常用Router：HashRouter 和BrowserRouter
  HashRouter:使用URL的哈希值实现（localhost：3000/#/first）
  （推荐）BrowserRouter：使用H5的history的API组件实现的（localhost：3000/first）

  Link组件：用于指定导航链接（a标签）
  //to 属性：浏览器地址栏中的pathname（location.pathname）

  Route组件：指定路由展示组件相关信息
  //path属性：路由规则
  //component属性：展示的组件
  //Route组件写在哪，渲染出来的组件就展示在哪
  //<Route path="/first" component={First} />
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
);


// reportWebVitals();
