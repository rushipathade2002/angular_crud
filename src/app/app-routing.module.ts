import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { ListeditComponent } from './listedit/listedit.component';

const routes: Routes = [
  {path:"",component:UserComponent},
  {path:"items", component: ItemlistComponent },
  {path:"editItem/:id", component:ListeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
