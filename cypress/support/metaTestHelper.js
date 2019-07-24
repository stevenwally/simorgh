export const assertCookieValue = (cookieName, value) => {
  cy.getCookie(cookieName).should('have.property', 'value', value);
};

export const assertCookieExpiryDate = (cookieName, timestamp) => {
  const testBuffer = 60;
  cy.getCookie(cookieName).then(c => {
    expect(c.expiry).to.be.within(
      timestamp - testBuffer,
      timestamp + testBuffer,
    );
  });
};

export const openGraphMeta = (
  description, // eslint-disable-line no-unused-vars
  imageUrl,
  altText,
  locale,
  siteName,
  title, // eslint-disable-line no-unused-vars
  type,
  url,
) => {
  it('should have OpenGraph meta data', () => {
    // cy.retrieveMetaDataContent('head meta[name="og:description"]', description); // !!! Remove eslint-disabling comment above when un-commenting this test.
    cy.retrieveMetaDataContent('head meta[name="og:image"]', imageUrl);
    cy.retrieveMetaDataContent('head meta[name="og:image:alt"]', altText);
    cy.retrieveMetaDataContent('head meta[name="og:locale"]', locale);
    cy.retrieveMetaDataContent('head meta[name="og:site_name"]', siteName);
    // cy.retrieveMetaDataContent('head meta[name="og:title"]', title); // !!! Remove eslint-disabling comment above when un-commenting this test.
    cy.retrieveMetaDataContent('head meta[name="og:type"]', type);
    cy.retrieveMetaDataContent('head meta[name="og:url"]', url);
  });
};

export const twitterMeta = (
  card,
  creator,
  description, // eslint-disable-line no-unused-vars
  imageAlt,
  imageSrc,
  site,
  title, // eslint-disable-line no-unused-vars
) => {
  it('should have Twitter meta data', () => {
    cy.retrieveMetaDataContent('head meta[name="twitter:card"]', card);
    cy.retrieveMetaDataContent('head meta[name="twitter:creator"]', creator);
    // cy.retrieveMetaDataContent(
    //   'head meta[name="twitter:description"]',
    //   description,
    // ); // !!! Remove eslint-disabling comment above when un-commenting this test.
    cy.retrieveMetaDataContent('head meta[name="twitter:image:alt"]', imageAlt);
    cy.retrieveMetaDataContent('head meta[name="twitter:image:src"]', imageSrc);
    cy.retrieveMetaDataContent('head meta[name="twitter:site"]', site);
    // cy.retrieveMetaDataContent('head meta[name="twitter:title"]', title); // !!! Remove eslint-disabling comment above when un-commenting this test.
  });
};

export const checkCanonicalURL = URL => {
  cy.get('head link[rel="canonical"]').should('have.attr', 'href', URL);
};

export const checkAmpHTML = amphtml => {
  cy.get('head link[rel="amphtml"]').should('have.attr', 'href', amphtml);
};

export const retrieve404BodyResponse = (url, bodyResponse) => {
  cy.request({ url, failOnStatusCode: false })
    .its('body')
    .should('include', bodyResponse);
};

export const checkDataMatchesMetadata = data => {
  const description = data.promo.summary || data.promo.headlines.seoHeadline;
  const title = data.promo.headlines.seoHeadline;
  const { language } = data.metadata.passport;
  const { type } = data.metadata;
  const firstPublished = new Date(data.metadata.firstPublished).toISOString();
  const lastPublished = new Date(data.metadata.lastPublished).toISOString();

  cy.retrieveMetaDataContent('head meta[name="description"]', description);
  cy.retrieveMetaDataContent('head meta[name="og:title"]', title);
  cy.retrieveMetaDataContent('head meta[name="og:type"]', type);
  cy.retrieveMetaDataContent(
    'head meta[name="article:published_time"]',
    firstPublished,
  );
  cy.retrieveMetaDataContent(
    'head meta[name="article:modified_time"]',
    lastPublished,
  );
  cy.get('html').should('have.attr', 'lang', language);
};

// This will only work if you visit the matching canonical
// url prior to running this.

export const metadataAssertionAMP = AMPURL => {
  cy.window().then(win => {
    const windowData = win.SIMORGH_DATA.pageData;
    cy.visit(AMPURL);
    checkDataMatchesMetadata(windowData);
  });
};

// AMP overrides the Window data in window.SIMORGH_DATA. In order to get
// around this we visit the canonical page first to retrieve
// window.SIMORGH_DATA and use this to compare against the metadata
// served in the head of an AMP page.
