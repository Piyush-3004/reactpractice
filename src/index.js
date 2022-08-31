import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greet from './component/Greet';
//import {Greet} from './component/Greet';
import ClassComponentEg from './component/ClassComponentEg'
import Test from'./component/jsx_test'
import StateEg from './component/StateEg'
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import Ifelse from './component/Ifelse';
import NameList from './component/NameList';
import Styling from './component/Styling';
import ControllerComponent from './component/ControllerComponent';
import Blz from './component/Blz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="appComponent"/>
    <Greet name="prop">
    <p>Ths Iss Child element</p>
    </Greet>
    <ClassComponentEg name="classComponent"/>
    <Test />
    <StateEg />
    <Counter value="5"/>
    <FunctionClick />
    <ClassClick />
    <EventBind />
    <ParentComponent />
    <Ifelse />
    <NameList />
    <Styling primary={true}/>
    <ControllerComponent />
    <Blz />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
