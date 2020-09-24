export class Dashboard{
    constructor(){

    }

    render(){
        return `
        <div class="dashboard">
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
                                <div class="user-bar__user-name">   User<i id="ember104" class="user-bar__icon lp-icon-angle-down ember-view"></i></div>
                                <div class="user-bar__company-name-wrapper">
                                    <span class="user-bar__company-name"></span>
                                </div>
                                <ul class="user-bar__child-list">
                                    <li class="user-bar__child-item">
                                        <ul class="user-bar__partner-settings">
                                            <li class="user-bar__partner-settings-item">
                                                <a href="#/outlets" id="ember105" class="user-bar__child-link ember-view">Торговые точки</a>
                                            </li>
                                            <li class="user-bar__partner-settings-item">
                                                <a href="#/employees" id="ember106" class="user-bar__child-link ember-view">Сотрудники</a>
                                            </li>
                                            <!---->                          </ul>
                                    </li>
                                    <li class="user-bar__child-item">
                                        <a href="#/features" id="ember107" class="user-bar__child-link user-bar__child-link--features ember-view">                              Решения <br> для бизнеса
                                        </a>                        </li>
                                    <li class="user-bar__child-item">
                                        <a href="#/user-settings" id="ember108" class="user-bar__child-link ember-view">Профиль</a>
                                    </li>
                                    <li class="user-bar__child-item">
                                        <a href="#/support" id="ember109" class="user-bar__child-link ember-view">Поддержка</a>
                                    </li>
                                    <li class="user-bar__child-item">
                                        <button class="user-bar__child-link user-bar__child-link--log-out">
                                            Выход
                                        </button>
                                    </li>
                                </ul>
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
                        <div class="cell" data-title="Full Name">
                            Vincent Williamson
                        </div>
                        <div class="cell" data-title="Age">
                            31
                        </div>
                        <div class="cell" data-title="Job Title">
                            iOS Developer
                        </div>
                        <div class="cell" data-title="Job Title">
                            iOS Developer
                        </div>
                        <div class="cell" data-title="Location">
                            Washington
                        </div>
                        <div class="cell" data-title="Location">
                            Washington
                        </div>
                        <div class="cell" data-title="Location">
                            Washington
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
        `
    }
}