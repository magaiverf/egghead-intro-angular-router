import { RouterModule } from '@angular/router';

const routes = [
    {path: '', loadChildren: 'app/home/home.module'},
    {path: 'contacts', loadChildren: 'app/contact/contacts.module'},
    ];

export default RouterModule.forRoot(routes);