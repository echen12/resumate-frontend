import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_cn from "./translations/cn/common.json";
import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";
import common_fr from "./translations/fr/common.json";
import common_hi from "./translations/hi/common.json";
import common_jp from "./translations/jp/common.json";
import common_kr from "./translations/kr/common.json";
import common_pl from "./translations/pl/common.json";
import Courses from './pages/Courses';
import Options from './pages/Options';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ResumeRewrite from './pages/ResumeRewrite';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "courses",
    element: <Courses />
  },
  {
    path: "options",
    element: <Options/>
  },
  {
    path: "rewrite",
    element: <ResumeRewrite/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
    cn: {
      common: common_cn               // 'common' is our custom namespace
    },
    en: {
      common: common_en
    },
    es: {
      common: common_es               // 'common' is our custom namespace
    },
    fr: {
      common: common_fr
    },
    hi: {
      common: common_hi
    },
    jp: {
      common: common_jp
    },
    kr: {
      common: common_kr
    },
    pl: {
      common: common_pl
    },
  },
});


root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router = {router} />
    </I18nextProvider>
  </React.StrictMode>
)

// root.render(
//   <React.StrictMode>
//     <I18nextProvider i18n={i18next}>
//       <App />
//     </I18nextProvider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
