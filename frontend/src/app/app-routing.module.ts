import { ProdutosDeleteComponent } from './components/produtos/produtos-delete/produtos-delete.component';
import { ProdutosUpdateComponent } from './components/produtos/produtos-update/produtos-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './view/home/home.component';
import {CrudComponent} from './view/produtos/crud/crud.component';
import { ProdutosCreateComponent } from './components/produtos/produtos-create/produtos-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "produtos",
  component: CrudComponent
},{
  path: "produtos/create",
  component: ProdutosCreateComponent
},{
  path: "produtos/update/:id",
  component: ProdutosUpdateComponent
}
,{
  path: "produtos/delete/:id",
  component: ProdutosDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
