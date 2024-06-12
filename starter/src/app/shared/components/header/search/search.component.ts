import { Component } from '@angular/core';
import { SearchService } from '../../../../shared/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  constructor( public searchService : SearchService ){ }

}
