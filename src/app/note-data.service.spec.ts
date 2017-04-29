import { TestBed, inject } from '@angular/core/testing';
import {Note} from './note';
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
});
