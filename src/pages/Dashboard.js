import {Page} from "../router/Page";
import {Request} from "./Request";


export class Dashboard extends Page{

    constructor(){
        super();
        this.request = new Request();
        this.createTable();
    }
    
    //получение данных с сервера
    

    async createTable(){
        const actions = await this.request.getActions();

        let rows = [];
        console.log('actions', actions);


        actions.forEach( action => {
            rows.push(this.createRow(this.createCell(action)));
        });



        const $el = document.querySelector("[data-type='actions']");
        $el.innerHTML = rows.join('');
    }

    createRow(content){
        return `<div class="row">${content}</div>`
    }


    createCell(action){
        let actionParam = [];

        for(let key in action){
            // console.log(key + ': ' + action[key]);
            actionParam.push(`
            <div class="cell">
               ${action[key]}
            </div>
            `)
        }

        return actionParam.join('');
    }

    getRoot(){
        const elem = super.getRoot('dashboard');
        elem.innerHTML = ` 
        
        <header class="header">
            <div class="layout">
                <div class="navigation">
                    <ul class="navigation__list">
                        <div class="navigation__item">
                            <!--<img height="50px" class="header__logo" src="/images/logo.svg">-->
                            <div class="logo"></div>
                        </div>
                        <li class="navigation__item ember-view">
                            <a href="#/dashboard" class="navigation__link active ember-view">Список акций</a>
                        </li>
                        <li id="" class="navigation__item ember-view">
                            <a href="#/dashboard" class="navigation__link active ember-view">Настройки</a>
                        </li>
                    </ul>
                    <div class="user-bar">
                        <ul class="user-bar__list">
                            <li class="user-bar__item user-bar__item--parent">
                                <div class="user-bar__user-name"><a href="#">Выход</a><i id="ember104" class="user-bar__icon lp-icon-angle-down ember-view"></i></div>
<!--                                <div class="user-bar__user-name"><a href="#">Выход</a></div>-->
<!--                                <div class="user-bar__company-name-wrapper">-->
<!--                                    <span class="user-bar__company-name"><a href="#">Выход</a></span>-->
<!--                                </div>-->
<!--                                <ul class="user-bar__child-list">-->
<!--                                    <li class="user-bar__child-item">-->
<!--                                        <ul class="user-bar__partner-settings">-->
<!--                                            <li class="user-bar__partner-settings-item">-->
<!--                                                <a href="#/outlets" id="ember105" class="user-bar__child-link ember-view">Торговые точки</a>-->
<!--                                            </li>-->
<!--                                            <li class="user-bar__partner-settings-item">-->
<!--                                                <a href="#/employees" id="ember106" class="user-bar__child-link ember-view">Сотрудники</a>-->
<!--                                            </li>-->
<!--                                            &lt;!&ndash;&ndash;&gt;                          </ul>-->
<!--                                    </li>-->
<!--                                    <li class="user-bar__child-item">-->
<!--                                        <a href="#/features" id="ember107" class="user-bar__child-link user-bar__child-link&#45;&#45;features ember-view">                              Решения <br> для бизнеса-->
<!--                                        </a>                        </li>-->
<!--                                    <li class="user-bar__child-item">-->
<!--                                        <a href="#/user-settings" id="ember108" class="user-bar__child-link ember-view">Профиль</a>-->
<!--                                    </li>-->
<!--                                    <li class="user-bar__child-item">-->
<!--                                        <a href="#/support" id="ember109" class="user-bar__child-link ember-view">Поддержка</a>-->
<!--                                    </li>-->
<!--                                    <li class="user-bar__child-item">-->
<!--                                        <button class="user-bar__child-link user-bar__child-link&#45;&#45;log-out">-->
<!--                                            Выход-->
<!--                                        </button>-->
<!--                                    </li>-->
<!--                                </ul>-->
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <div class="page-content">
            <div class="layout">
                <h1 class="page-title">Список акций</h1>
                <div class="table">

                    <div class="row header">
                        <div class="cell">
                            Изображение
                        </div>
                        <div class="cell">
                            Название
                        </div>
                        <div class="cell">
                            Описание
                        </div>
                        <div class="cell">
                            Новая цена
                        </div>
                        <div class="cell">
                            Старая цена
                        </div>
                        <div class="cell">
                            Статус
                        </div>
                        <div class="cell">
                            ред
                        </div>
                    </div>
                    

                    <div class="" data-type="actions">
                                                
                    </div>


                </div>
            </div>
        </div>
        `;

        return elem;
    }
}