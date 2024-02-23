import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.scss'
})
export class ListingDetailPageComponent {

  constructor(private route: ActivatedRoute,){}

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
  }

}
