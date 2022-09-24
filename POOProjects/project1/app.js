let mockData = [{
    id: '1',
    title: 'This is title',
    done: false,
    date: new Date()
  }, {
    id: '2',
    title: 'This is second title',
    done: false,
    date: new Date()
  }, {
    id: '3',
    title: 'This is third title',
    done: false,
    date: new Date()
  }, {
    id: '4',
    title: 'This is forth title',
    done: false,
    date: new Date()
}];

class Todo{
    constructor(){
        let self =this;
        this.list =document.querySelector('.list-item');
        this.render();

        document.querySelector('.btn-add-item').addEventListener('click', this.insertItem.bind(this));
        document.querySelector('.btn-update').addEventListener('click', this.updateItem.bind(this));

        document.addEventListener('click', event=>{
            if(!event.target){
                return;
            }

            if(event.target.classList.constains('btn-delete')){
                self.removeItem(event);
            }
            
        })

    }
}