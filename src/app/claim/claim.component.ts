import { Component, OnInit } from '@angular/core';
import { ClaimService } from '../claim.service'
import { FirebaseListObservable } from 'angularfire2/database';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Claim} from '../claim.model';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css'],
  providers: [ClaimService]
})
export class ClaimComponent implements OnInit {
  claimId: string;
  claimToDisplay;

  claims: FirebaseListObservable<any[]>
  constructor(private route: ActivatedRoute, private location: Location, private claimService: ClaimService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      console.log(urlParameters)
      this.claimId = urlParameters['claimId']
    })
    this.claimToDisplay = this.claimService.getClaimById(this.claimId)
  }

}
