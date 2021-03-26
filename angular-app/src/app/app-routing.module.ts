import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MongoComponent } from './components/mongo/mongo.component';
import { ReadMeComponent } from './components/read-me/read-me.component';
import { MyStoreComponent } from './components/store/store.component';

const routes: Routes = [
  { path: 'mongo', component: MongoComponent },
  { path: 'readme', component: ReadMeComponent },
  { path: 'store', component: MyStoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
