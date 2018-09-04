import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('h1')).getText();
  }

  getFirstTrendingItem() {
    return element.all(by.css('.trending-item')).get(0);
  }
  getFirstTrendingItemNavLink() {
    return element.all(by.css('.trending-item a')).get(0);
  }
}
