import { MyNotePage } from './app.po';

describe('my-note App', () => {
  let page: MyNotePage;

  beforeEach(() => {
    page = new MyNotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
