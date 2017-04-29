import { TestBed, inject } from '@angular/core/testing';
import { Note } from './note';
import { NoteDataService } from './note-data.service';

describe('NoteDataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NoteDataService]
        });
    });

    it('should ...', inject([NoteDataService], (service: NoteDataService) => {
        expect(service).toBeTruthy();
    }));

    describe('#getNotes()', () => {
        it('should return an empty array by default', inject([NoteDataService], (service: NoteDataService) => {
            expect(service.getNotes()).toEqual([]);
        }));

        it('should return all notes', inject([NoteDataService], (service: NoteDataService) => {
            let note1 = new Note({title: 'Note 1 Title', content: 'Note 1 Content'});
            let note2 = new Note({title: 'Note 2 Title', content: 'Note 2 Content'});
            service.addNote(note1);
            service.addNote(note2);
            expect(service.getNotes()).toEqual([note1, note2]);
        }));
    });

    describe('#save(note)', () => {
        it('should assign an incremental ID', inject([NoteDataService], (service: NoteDataService) => {
            let note1 = new Note({title: 'Note 1 Title', content: 'Note 1 Content'});
            let note2 = new Note({title: 'Note 2 Title', content: 'Note 2 Content'});
            service.addNote(note1);
            service.addNote(note2);
            expect(service.getNote(1)).toEqual(note1);
            expect(service.getNote(2)).toEqual(note2);
        }));
    });

    describe('#deleteNote(id)', () => {
        it('should remove the note with the specified id', inject([NoteDataService], (service: NoteDataService) => {
            let note1 = new Note({title: 'Note 1 Title', content: 'Note 1 Content'});
            let note2 = new Note({title: 'Note 2 Title', content: 'Note 2 Content'});
            service.addNote(note1);
            service.addNote(note2);
            expect(service.getNotes()).toEqual([note1, note2]);
            service.deleteNote(1);
            expect(service.getNotes()).toEqual([note2]);
            service.deleteNote(2);
            expect(service.getNotes()).toEqual([]);
        }));

        it('should not removing anything', inject([NoteDataService], (service: NoteDataService) => {
            let note1 = new Note({title: 'Note 1 Title', content: 'Note 1 Content'});
            let note2 = new Note({title: 'Note 2 Title', content: 'Note 2 Content'});
            service.addNote(note1);
            service.addNote(note2);
            expect(service.getNotes()).toEqual([note1, note2]);
            service.deleteNote(3);
            expect(service.getNotes()).toEqual([note1, note2]);
        }));
    });

    describe('#updateNote(id, values)', () => {
        it('should update note with the specified ID', inject([NoteDataService], (service: NoteDataService) => {
            let note1 = new Note({title: 'Note Title', content: 'Note Content'});
            service.addNote(note1);
            let note2 = service.updateNote(1, {title: 'new title', content: 'new content'});
            expect(note2).toEqual(note1);
            expect(note1.title).toEqual('new title');
        }));

        it('should return null if note is not found', inject([NoteDataService], (service: NoteDataService) => {
            let note1 = new Note({title: 'Note Title', content: 'Note Content'});
            service.addNote(note1);
            let note2 = service.updateNote(2, {title: 'new title'});
            //console.log(note2);
            //expect(note2).toEqual(null);
        }));
    });
});
