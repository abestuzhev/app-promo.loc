export class Page{
   constructor() {
   }

   getRoot(classElem){

      if(!classElem) {
         throw new Error('not getRoot in class Page')
      };

      const elem = document.createElement('div');
      elem.classList.add(classElem);
      return elem;

   }


}