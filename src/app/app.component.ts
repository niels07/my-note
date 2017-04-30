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
    constructor(private noteDataService: NoteDataService) {

    }

    onAddNote(note: Note) {
        this.noteDataService.addNote(note);
    }

    onUpdateNote(noteId: number) {
        this.noteDataService.updateNote(noteId);
    }

    onRemoveNote(note: Note) {
        this.noteDataService.deleteNote(note.id);
    }

    get notes() {
        return this.noteDataService.getNotes();
    }
}
