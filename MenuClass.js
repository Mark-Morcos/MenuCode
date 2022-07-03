class Order {
    constructor(name,position){
        this.name=[];
        this.position=position;

 
    } 
    describe(){
        return `The order are ${this.name}`
    }
    viewOrder (){
        let orderItems ='';
        for (let i=0; i<this.name.length; i++) {
        orderItems +=i + ')' + this.name[i] + '\n';
        }
        alert (orderItems);
    }

    createOrder (){
        let position = prompt("How Many item do you need to add to your order")
        for (let i=0;i<position;i++){
            let names= prompt("Enter order")
            this.name.push(names)
        }
    }

    deleteOrder (){
        let x = prompt("which item number you need to remove")
        this.name.splice(x,1)
    }
}

 class Menu extends Order {
     constructor(name,position){
         super(name,position)

     }

        start() {
            let selection = this.showMainMenuOptions();
             while (selection !=0){
                 switch (selection){
                     
                     case '1':
                         this.createOrder();
                         break;
                      case '2':
                          this.viewOrder();
                          break;
                      case '3':
                          this.deleteOrder();
                          break;
                    default :
                    selection=0;       
                 }
                 selection = this.showMainMenuOptions();
                }
                alert ('GoodBye ')
            }
                 showMainMenuOptions()
                 {
                    return prompt(`
                    0) exit
                    1) create new Order
                    2) view Order
                    3) delete item on order
                    `);
                    }
             }
        


     

 let menu= new Menu()
 menu.start();
