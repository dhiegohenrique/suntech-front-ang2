/* tslint:disable */

import { SuntechFrontAng2Page } from './app.po';
import { browser, by, element } from 'protractor';

describe('suntech-front-ang2 App', () => {
  let page: SuntechFrontAng2Page;

  beforeEach(() => {
    page = new SuntechFrontAng2Page();
    page.navigateTo();
  });

  it('should be message when user not found', () => {
    let inputFilter = element(by.tagName("input"));
    inputFilter.sendKeys("@#$!@$asdfasdf*(&!(@)");
  
    let message = element(by.id("message"));
    expect(message.isPresent()).toBe(true);
  });
});
