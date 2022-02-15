import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Subject } from "rxjs"
import { switchMap, debounceTime, distinctUntilKeyChanged } from 'rxjs/operators'

@Component({
  selector: 'billing-search',
  templateUrl: './billing-search.component.html'
})

export class BillingSearchComponent implements OnInit{
  public searchTerms: Subject<string> = new Subject()
  public billings: Array<{id: number,
    customer: string }> | null = null;

  public constructor(private router: Router){  }

  public ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilKeyChanged(0),
      switchMap(
      term => term ? [{
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
    }] : []))
      // .subscribe(billings => this.billings = billings)
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