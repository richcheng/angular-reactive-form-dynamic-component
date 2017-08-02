import { CustomFormPage } from './app.po';

describe('custom-form App', () => {
  let page: CustomFormPage;

  beforeEach(() => {
    page = new CustomFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
