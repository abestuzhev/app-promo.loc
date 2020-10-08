import {request} from "../core/utils";
import {createAction} from "../core/utils";


export class Request{
    async getActions(){

        return await request('http://api.app-promo.loc/actions');




        // console.log('data', data);
    };
}