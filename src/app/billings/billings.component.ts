import { Component } from "@angular/core";
import { Billing } from "./shared/billing.model";

@Component({
    selector: 'billings',
    templateUrl: './billings.component.html',
})
export class BillingComponent {
    billings: Billing[] | null = null;

    constructor() {
        this.billings = [ new Billing(453, "Lucas", 3, "40/01613-7",
        new Date(), "guimaraes-lucas@outlook.com.br", "+557799356548") ];
    }
}