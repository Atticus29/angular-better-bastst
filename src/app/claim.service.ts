import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ClaimService {
  claims: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.claims = database.list('/claims')
  }

  getClaims() {
    return this.claims
  }

  getClaimById(claimId: string) {
    return this.database.object('claims/'+claimId)
  }

}
