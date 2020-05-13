import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule} from '@angular/material/sidenav'
import { MatCardModule} from '@angular/material/card'
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button'
import { MatSnackBarModule} from '@angular/material/snack-bar'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'
import { FormsModule} from '@angular/forms'

import localeBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { HomeComponent } from './view/home/home.component';
import { CrudComponent } from './view/produtos/crud/crud.component';
import { ProdutosCreateComponent } from './components/produtos/produtos-create/produtos-create.component'

import {HttpClientModule} from '@angular/common/http';
import { ProdutosReadComponent } from './components/produtos/produtos-read/produtos-read.component';
import { ProdutosRead2Component } from './components/produtos/produtos-read2/produtos-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProdutosUpdateComponent } from './components/produtos/produtos-update/produtos-update.component';
import { ProdutosDeleteComponent } from './components/produtos/produtos-delete/produtos-delete.component'

registerLocaleData(localeBr)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CrudComponent,
    ProdutosCreateComponent,
    ProdutosReadComponent,
    ProdutosRead2Component,
    ProdutosUpdateComponent,
    ProdutosDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
