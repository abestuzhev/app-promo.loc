import {request} from "../core/utils";
import {createAction} from "../core/utils";


export class Request{
    getActions(){

        let arr = [];

        const responceActions = request('http://api.app-promo.loc/actions');
        responceActions.then( action => {
            // createAction(actions);
            
            action.forEach( a => {
                arr.push(a);
            })
            console.log('responceActions', action);
            // arr.push(action);
        });

        return arr;
    };
}