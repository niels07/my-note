import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
    selector: 'app-note-list-header',
    templateUrl: './note-list-header.component.html',
    styleUrls: ['./note-list-header.component.css']
})
export class NoteListHeaderComponent implements OnInit {
    newNote: Note = new Note();
    title = 'My Note';

    constructor() { }

    ngOnInit() {
    
    }
}
