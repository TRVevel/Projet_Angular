export class Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    

    logCustomerInfos(): void {
        console.log(this.id + " " + this.name + " " + this.price + " " + this.stock + " " );
    }

    constructor(id: number, name: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
       
    }
}