import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
    selector: 'app-note-list-item',
    templateUrl: './note-list-item.component.html',
    styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent implements OnInit {
    @Input()
    note: Note;

    @Output()
    remove: EventEmitter<Note> = new EventEmitter();

    constructor() {

    }

    ngOnInit() {

    }

    removeNote(note: Note) {
        this.remove.emit(note);
    }
}
