import { MiProyectoAngular2Page } from './app.po';

describe('mi-proyecto-angular2 App', function() {
  let page: MiProyectoAngular2Page;

  beforeEach(() => {
    page = new MiProyectoAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
