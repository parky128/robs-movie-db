import { AppPage } from './app.po';
import { Helpers } from './helpers';

describe('Home Page Trending Item Navigation - ', () => {
  let page: AppPage;
  let helpers: Helpers;

  beforeEach(() => {
    page = new AppPage();
    helpers = new Helpers();
  });

  describe('when clicking on the first trending item', () => {
    it('should navigate to the full record page for that item', () => {
      let movieTitle;
      page.navigateTo();
      page.getFirstTrendingItemNavLink().getText().then((text) => {
        console.log(movieTitle);
        movieTitle = text;
        page.getFirstTrendingItemNavLink().click();
        helpers.waitForUrlToContain('movie');
        expect(page.getHeaderText()).toEqual(movieTitle);
      });
    });
  });
});
