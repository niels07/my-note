import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';

@Component({
    selector: 'app-note-list-footer',
    templateUrl: './note-list-footer.component.html',
    styleUrls: ['./note-list-footer.component.css']
})
export class NoteListFooterComponent implements OnInit {

    @Input()
    notes: Note[];

    constructor() {
    
    }

    ngOnInit() {

    }
}
