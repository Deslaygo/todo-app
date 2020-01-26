import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTodoDialogComponent } from './components/add-todo-dialog/add-todo-dialog.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
//imports to material designs
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule} from '@angular/material/input';
import  { MatFormFieldModule } from '@angular/material/form-field';
import  { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule} from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
//import { MatMomentDateModule} from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoDialogComponent,
    HomePageComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    //MatMomentDateModule,
    MatIconModule,
    MatGridListModule,
    DragDropModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
