import {request} from "../core/utils";
import {createAction} from "../core/utils";


export class ActionsList{
    getResponce(){

        const responceActions = request('http://api.app-promo.loc/actions');
        responceActions.then( actions => {
            // createAction(actions);
            console.log(actions)
        })
    };
}