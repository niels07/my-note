import { Component } from '@angular/core';
import { NoteDataService } from './note-data.service';
import { Note } from './note';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [NoteDataService]
})
export class AppComponent {
    newNote: Note = new Note();
    title = 'My Note';
    
    constructor(private noteDataService: NoteDataService) {

    }

    addNote() {
        this.noteDataService.addNote(this.newNote);
        this.newNote = new Note();
    }

    removeNote(note) {
        this.noteDataService.deleteNote(note.id);
    }

    get notes() {
        return this.noteDataService.getNotes();
    }
}
