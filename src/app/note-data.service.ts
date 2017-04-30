import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable()
export class NoteDataService {
    noteId: number = 0;
    notes: Note[] = [];

    constructor() { 
    
    }

    getNote(noteId: number): Note {
        return this.notes.filter(note => note.id === noteId).pop();
    }

    addNote(note: Note): NoteDataService {
        if (!note.id) {
            note.id = ++this.noteId;
        }
        this.notes.push(note);
        return this;
    }

    deleteNote(noteId: number): NoteDataService {
        this.notes = this.notes.filter(note => note.id !== noteId);
        return this;
    }

    updateNote(noteId: number, values: Object = {}): Note {
        let note: Note = this.getNote(noteId);
        if (note) {
            Object.assign(note, values);
        }
        return note;
    }

    getNotes(): Note[] {
        return this.notes;
    }
}
