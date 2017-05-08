import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../claim.service'
import { FirebaseListObservable } from 'angularfire2/database';
import { Claim } from '../claim.model';
import {Router} from '@angular/router'

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html',
  styleUrls: ['./claims-list.component.css'],
  providers: [ClaimService]
})
export class ClaimsListComponent implements OnInit {
  claims: FirebaseListObservable<any[]>

  constructor(private claimService: ClaimService, private router: Router) { }

  ngOnInit() {
    this.claims = this.claimService.getClaims()
  }

  goToClaimDetailPage(clickedClaim){
    this.router.navigate(['claim', clickedClaim.$key]);
  }

}
