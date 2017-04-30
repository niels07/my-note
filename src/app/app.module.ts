import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NoteListHeaderComponent } from './note-list-header/note-list-header.component';
import { ManageNoteComponent } from './manage-note/manage-note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteListItemComponent } from './note-list-item/note-list-item.component';
import { NoteListFooterComponent } from './note-list-footer/note-list-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListHeaderComponent,
    ManageNoteComponent,
    NoteListComponent,
    NoteListItemComponent,
    NoteListFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
