import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { GetGifService } from '../services/get-gif.service';
import { GIF_SEARCH_ERR, GET_ALL_RESPONSES } from './../actions';
import { IAppState } from '../in-app-store';


@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    gifSearch = '';

    constructor(private gifService: GetGifService,
                private ngRedux: NgRedux<IAppState>) { }

    ngOnInit() {
    }

    fetchGif(gifWord) {
        if (!gifWord) {
            const err = '*** Please type a keyword into the search box to search for a movie ***';
            this.ngRedux.dispatch({type: GIF_SEARCH_ERR, err});
        } else {
            this.gifService.getGif(gifWord).subscribe((data: any) => {
                    let res = {...data};
                    res = res.data;
                    console.log(res)
                    const err = '';
                    const keywords = {gifWord};
                    this.ngRedux.dispatch({type: GET_ALL_RESPONSES, allResults: res, err, keywords});
                  }
                );
            }
        this.gifSearch = '';
    }
}
