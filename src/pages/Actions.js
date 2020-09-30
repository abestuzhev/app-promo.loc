export class Actions{

    getItems(){
        const responceActions = request('http://api.app-promo.loc/actions');
        responceActions.then( actions => {
            createAction(actions);
            console.log(actions)
        })
    };
}