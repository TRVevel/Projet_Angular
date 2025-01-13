export class Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    adress: string;
    orders:[any];

    logOrderInfos(): void {
        console.log(this.id + " " + this.name + " " + this.email + " " + this.phone + " " + this.adress + " " + this.orders);
    }

    constructor(id: number, name: string, email: string, phone: string, adress: string, orders:[any]) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.adress = adress;
        this.orders = orders;
    }
}