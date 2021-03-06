import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import FrontPageMain from '.';
import frontPageDataPidgin from '#data/pidgin/frontpage';
import preprocessor from '#lib/utilities/preprocessor';
import addIdsToItems from '#lib/utilities/preprocessor/rules/addIdsToItems';
import { RequestContextProvider } from '#contexts/RequestContext';
import { ServiceContextProvider } from '#contexts/ServiceContext';

const processedPidgin = preprocessor(frontPageDataPidgin, [addIdsToItems]);

jest.mock('uuid', () =>
  (() => {
    let x = 1;
    return () => {
      x += 1;
      return `mockid-${x}`;
    };
  })(),
);

jest.mock('../ChartbeatAnalytics', () => {
  const ChartbeatAnalytics = () => <div>chartbeat</div>;
  return ChartbeatAnalytics;
});

const requestContextData = {
  isAmp: false,
  service: 'igbo',
  statusCode: 200,
  pageType: 'frontPage',
  pathname: '/pathname',
};

const FrontPageMainWithContext = props => (
  <RequestContextProvider {...requestContextData}>
    <ServiceContextProvider service="igbo">
      <FrontPageMain {...props} />
    </ServiceContextProvider>
  </RequestContextProvider>
);

describe('FrontPageMain', () => {
  describe('snapshots', () => {
    shouldMatchSnapshot(
      'should render a pidgin frontpage correctly',
      <FrontPageMainWithContext frontPageData={processedPidgin} />,
    );
  });

  describe('assertions', () => {
    afterEach(cleanup);

    it('should render visually hidden text as h1', () => {
      const { container } = render(
        <FrontPageMainWithContext frontPageData={processedPidgin} />,
      );
      const h1 = container.querySelector('h1');
      const content = h1.getAttribute('id');
      const tabIndex = h1.getAttribute('tabIndex');

      expect(content).toEqual('content');
      expect(tabIndex).toBe('-1');

      const span = h1.querySelector('span');
      expect(span.getAttribute('role')).toEqual('text');
      expect(span.textContent).toEqual('BBC News, Ìgbò - Akụkọ');

      const langSpan = span.querySelector('span');
      expect(langSpan.getAttribute('lang')).toEqual('en-GB');
      expect(langSpan.textContent).toEqual('BBC News');
    });

    it('should render front page sections', () => {
      const { container } = render(
        <FrontPageMainWithContext frontPageData={processedPidgin} />,
      );
      const sections = container.querySelectorAll('section');

      expect(sections).toHaveLength(7);
      sections.forEach(section => {
        expect(section.getAttribute('role')).toEqual('region');
      });
    });
  });
});
