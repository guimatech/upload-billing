export class Billing {
    constructor(
      public id: number = 0,
      public customer: string = '',
      public installment: number = 0,
      public operation: string = '',
      public expiration: Date = new Date,
      public email: string = '',
      public phone: string = ''
    ){}
  }