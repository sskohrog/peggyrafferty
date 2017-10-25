import { MeaganraffertyPage } from './app.po';

describe('meaganrafferty App', () => {
  let page: MeaganraffertyPage;

  beforeEach(() => {
    page = new MeaganraffertyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
