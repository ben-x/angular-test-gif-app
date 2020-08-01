import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results-details',
  templateUrl: './results-details.component.html',
  styleUrls: ['./results-details.component.css']
})
export class ResultsDetailsComponent implements OnInit {
  @select() allResults;
  resultId = +this.route.snapshot.params.id;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
