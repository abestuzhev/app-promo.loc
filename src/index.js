import './scss/style.scss'
import {Router} from './router/Router.js';
import {Dashboard} from "./pages/Dashboard";
import {Action} from "./pages/Action";

//return object
const router = new Router('#root', {
   action: Action,
   admin: Dashboard
});
// console.log('router', router);



const $root = document.getElementById('root');

