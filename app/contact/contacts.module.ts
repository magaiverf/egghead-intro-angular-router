import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import contactRoutes from './contacts.routes';
import { ContactsComponent } from './contacts.component';
import { ContactComponent } from './contact.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [ CommonModule, HttpModule, contactRoutes ],
    declarations: [ContactsComponent, ContactComponent]
})
export default class ContactModule {

}