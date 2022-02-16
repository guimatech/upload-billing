import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Subject } from "rxjs"
import { switchMap, debounceTime, distinctUntilKeyChanged } from 'rxjs/operators'
import { Billing } from 'src/app/billings/shared/billing.model'

@Component({
  selector: 'billing-search',
  templateUrl: './billing-search.component.html'
})

export class BillingSearchComponent implements OnInit{
  public searchTerms: Subject<string> = new Subject()
  public billings: Billing[] | null = null;

  public constructor(private router: Router){  }

  public ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilKeyChanged(0),
      switchMap(
      term => term ? [ new Billing(453, "Lucas", 3, "40/01613-7",
      new Date(), "guimaraes-lucas@outlook.com.br", "+557799356548") ] : []))
      //  .subscribe(billings => this.billings = billings)
  }

  public search(term: string){
    this.searchTerms.next(term)
  }

  public gotoBilling(billing: {id: number,
    customer: string }){
    this.billings = []
    this.router.navigate(['/billings', billing.id])
  }
  
}