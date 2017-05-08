import { BatstsPage } from './app.po';

describe('batsts App', () => {
  let page: BatstsPage;

  beforeEach(() => {
    page = new BatstsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
