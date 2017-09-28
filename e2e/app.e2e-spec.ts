import { PolyPage } from './app.po';

describe('poly App', () => {
  let page: PolyPage;

  beforeEach(() => {
    page = new PolyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
