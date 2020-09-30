import {Page} from "../router/Page";

export class Action extends Page{
   getRoot() {
      const elem = super.getRoot('action');


      elem.innerHTML = `

         <div class="header">
            <div class="layout">
               <div class="navigation">
                    <ul class="navigation__list">
                        <div class="navigation__item">
                            <!--<img height="50px" class="header__logo" src="/images/logo.svg">-->
                            <div class="logo"></div>
                        </div>
                        <li id="" class="navigation__item ember-view">
                            <a href="#" class="navigation__link active ember-view">Главная</a>
                        </li>
                        <li class="navigation__item ember-view">
                            <a href="#admin" class="navigation__link active ember-view">Dashboard</a>
                        </li>
                        
                    </ul>
                    
               </div>
            </div>
         </div>
         
         <div class="layout">
         
            <div class="action-box">
               <div class="presto-sale__body">
         
                  <div class="action-label">Уникальное предложение!</div>
                  
                  <h2 class="action-title">Пицца «Чоризо» 28 см за 250₽</h2>
                  
                  <div class="action-text">
                     Акция действует только на самовынос из кафе в ТРЦ Макси. Заказ будет ждать вас через 30 минут
                  </div>
         
                  
         
                  <div class="action-footer">
                     <form action="" method="POST" class="action-form">
                        <button type="button" class="action-btn" id="pay">Купить онлайн</button>
                     </form>
         
                     <div class="action-note">
                        *Акция действует только на самовынос по адресу: ТРЦ "Макси", пр. Ленинградский, 38.
                        Срок действия акции ограничен. С акциями и бонусами не пересекается.
                     </div>
         
                     <!-- <div class="presto-sale-order">
                         <div class="presto-sale-order__name"></div>
                         <div class="presto-sale-order__number"></div>
                     </div> -->
                  </div>
         
               </div>
               <div class="presto-sale-img">
                  <div class="presto-sale__composition-icon js-composition">i</div>   
                  <div class="presto-sale__composition">
                     Колбаски Чоризо, томатный соус, сыр Моцарелла, орегано
                  </div>
                  <img src="https://sale.pizzapresto.ru/template/img/img-product-3.png" alt="Пицца «Чоризо» 28 см">
                  <div class="presto-sale-img__card"></div>
               </div>
            </div>
            
         </div>
      `;

      return elem;

   }
}