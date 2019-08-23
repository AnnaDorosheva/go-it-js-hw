'use srtict'

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item){
this.items.push(item);
  }

  removeItem(item) {
    for(let i of items) {
        if(i === item) {
        const x =  items.indexOf(item);
            this.items.splice(x, 1);
        }
    }
  }
}


const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);

  

  const items = storage.getItems();
console.log(items);


storage.addItem('Дроид');
console.log(storage.items); 

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]