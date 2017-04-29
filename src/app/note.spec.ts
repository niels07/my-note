import {Note} from './note';

describe('Note', () => {
    it('should create an instance', () => {
        expect(new Note()).toBeTruthy();
    });

    it('should accept values in the constructor', () => {
        let note = new Note({
            title: 'Note Title',
            content: 'Note Content'
        });
        expect(note.title).toEqual('Note Title');
        expect(note.content).toEqual('Note Content');
    });
});
