import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
    selector: 'app-manage-note',
    templateUrl: './manage-note.component.html',
    styleUrls: ['./manage-note.component.css']
})
export class ManageNoteComponent implements OnInit {
    newNote: Note = new Note();

    @Output()
    add: EventEmitter<Note> = new EventEmitter();

    constructor() {

    }

    ngOnInit() {

    }

    addNote() {
        this.add.emit(this.newNote);
        this.newNote = new Note();
    }

    updateNote() {

    }
}
