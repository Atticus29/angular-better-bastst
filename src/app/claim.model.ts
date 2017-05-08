export class Claim {
  public timeCreated: Date = new Date();
  constructor(public assertion: string, public downvotes: number, public imageURL: string, public posterId: string, public upvotes: number){}
}
