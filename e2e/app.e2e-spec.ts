import { TodoTokenAuthPage } from './app.po';

describe('todo-token-auth App', () => {
  let page: TodoTokenAuthPage;

  beforeEach(() => {
    page = new TodoTokenAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
