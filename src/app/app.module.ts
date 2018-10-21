import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { KanboardComponent } from './board/kanboard/kanboard.component';
import { GistService } from './gist.service';
import {TimeAgoPipe} from 'time-ago-pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogBodyComponent } from './extras/dialog-body/dialog-body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KanboardComponent,
    TimeAgoPipe,
    DialogBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDialogModule
  ],
  providers: [ GistService],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule { }
