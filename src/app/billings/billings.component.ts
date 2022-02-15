import { Component } from "@angular/core";

@Component({
    selector: 'billings',
    templateUrl: './billings.component.html',
})
export class BillingComponent {
    billings: Array<{id: number,
        customer: string }> | null = null;

    constructor() {
        this.billings = [{
            "id": 442,
            "customer": "Myrtle"
        }, {
            "id": 376,
            "customer": "Georgette"
        }, {
            "id": 882,
            "customer": "Manning"
        }, {
            "id": 414,
            "customer": "Essie"
        }, {
            "id": 466,
            "customer": "Augusta"
        }, {
            "id": 315,
            "customer": "Mueller"
        }, {
            "id": 344,
            "customer": "Walter"
        }];
    }
}