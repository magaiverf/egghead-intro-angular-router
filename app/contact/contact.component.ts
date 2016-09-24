import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';

@Component({    
    template: `
        <h2>{{ (contact$ | async)?.name}}<h2>

        <img [src]="(contact$ | async)?.image" />
    `
})
export class ContactComponent {
    contact$:any;
    api: string = 'https://starwars-json-server-ewtdxbyfdz.now.sh/';
    
    constructor(private route: ActivatedRoute, private http: Http) {
        this.contact$ = route.params.map((p:any) => {
            return p.id;
        }).switchMap( id => http.get(this.api + 'people/' + id)
        .map(res => res.json()))
        .map(contact => Object.assign({}, contact, {image: this.api + contact.image}))
        .startWith({ name: 'Loading...', image: ''});
     }

}