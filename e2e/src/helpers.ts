import { browser } from 'protractor';

export class Helpers {
  waitForUrlToContain(urlPart, timeout?) {
    return browser.wait(() => {
      return browser.driver.getCurrentUrl().then((url) => {
        const regex = new RegExp(urlPart);
        return regex.test(url);
      });
    }, timeout ? timeout : 10000);
  }
}
