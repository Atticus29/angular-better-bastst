import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../claim.service'
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrls: ['./claims-list.component.css'],
  providers: [ClaimService]
})
export class ClaimsListComponent implements OnInit {
  claims: FirebaseListObservable<any[]>

  constructor(private claimService: ClaimService) { }

  ngOnInit() {
    this.claims = this.claimService.getClaims()
  }

}
