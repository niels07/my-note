import { Injectable } from '@angular/core';

@Injectable()
export class NoteDataService {

    noteId: number = 1;

    notes: Note[] = [];

    constructor() { }

    getNode(noteId: number): Note {
        if (noteId >= this.notes.count) {
            return null;
        }
        return this.notes[noteId];
    }

    addNote(note: Note): NoteDataService {
        if (!note.id) {
            note.id = this.lastId;
            this.lastId++;
        }
        this.notes.push(note);
        return this;
    }

    deleteNote(noteId: number): NoteDataService {
        this.notes.splice(noteId, 1);
        return this;
    }

    updateNote(noteId: number, title: string, content: string) {
        var note: Note = this.getNote(noteId);
        note.title = title;
        note.content = content;
        return this;
    }

    getNotes(): Note[] {
        return this.notes;
    }
}
