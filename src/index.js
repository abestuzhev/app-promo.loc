import './scss/style.scss'
// import Router from './router/Router.js';

import {Router} from './router/Router.js';
import {Dashboard} from "./admin/Dashboard";

//return object
const router = new Router();
console.log('router', router);



const $root = document.getElementById('root');


// const dashboard = new Dashboard();
// $root.innerHTML = new Dashboard().render();

//
//
const responceActions = request('http://api.app-promo.loc/actions');
responceActions.then(actions => {
    createAction(actions);
    console.log(actions)
});


function createAction(elements){
    const arr = [];
    elements.map( item => {
        
        if(item.actionStatus){
            arr.push(toHTML(item));      
            $root.innerHTML = arr.join('');
        }        
    });
}

function toHTML(item){
    return `
        <div>${item.productTitle}</div>
    `
}

async function request(url, method = 'GET', data = null){
    const headers = {};
    let body;

    try{
        if(data){
            headers['Content-Type'] =  'application/json';
            body = JSON.stringify(data);
        }
        const response = await fetch(url, {
            method,
            headers,
            body
        });
        return await response.json();
    }catch(e){
        throw new Error(e.message);
    }    
}