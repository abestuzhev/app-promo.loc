import {Page} from "../router/Page";
const actionDataArr = [
    {
        text: 'text 1'
    },
    {
        text: 'text 2'
    },
    {
        text: 'text 3'
    },
    {
        text: 'text 4'
    },
    {
        text: 'text 5'
    },
    {
        text: 'text 6'
    },
    {
        text: 'text 7'
    }
];
export class Dashboard extends Page{
    
    //получение данных с сервера
    
    //

    createCell(actionDataArr){

        //получаем массив акций
        let actionParam = [];
        actionDataArr.map( action => {
            actionParam.push(
                `
            <div class="cell">
                ${action.text}
            </div>
            `
            )
        });

        return actionParam.join('');
    }

    createRow(){

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

                    <div class="row">
                        ${this.createCell(actionDataArr)}
                        
                    </div>


                </div>
            </div>
        </div>
        `;

        return elem;
    }
}