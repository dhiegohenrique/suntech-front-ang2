import { SuntechFrontAng2Page } from './app.po';

describe('suntech-front-ang2 App', () => {
  let page: SuntechFrontAng2Page;

  beforeEach(() => {
    page = new SuntechFrontAng2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
