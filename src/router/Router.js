import {ActiveRoute} from "./ActiveRoute";

export class Router{
    constructor(selector, routers){
        this.$root = document.querySelector(selector);
        this.routers = routers;

        this.changePageHandler = this.changePageHandler.bind(this);
        this.init();

    }

    init(){

        window.addEventListener('hashchange', this.changePageHandler);
        this.changePageHandler();
    }

    changePageHandler(){

        this.$root.innerHTML = '';
        const Page = ActiveRoute.path === 'admin' ? this.routers.admin : this.routers.action;
        console.log(ActiveRoute.path)
        const page = new Page();
        this.$root.appendChild(page.getRoot());


    }

    destroy(){
        window.removeEventListener('hashchange', this.changePageHandler);
    }
}
