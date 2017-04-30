import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
    selector: 'app-note-list',
    templateUrl: './note-list.component.html',
    styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

    @Input()
    notes: Note[];

    @Output()
    remove: EventEmitter<Note> = new EventEmitter();

    constructor() { 
    
    }

    ngOnInit() {
    
    }

    onRemoveNote(note: Note) {
        this.remove.emit(note);
    }
}
