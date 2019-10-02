import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { RequestContextProvider } from '#contexts/RequestContext';
import MediaPageMain from '.';
import amharicPageData from '#data/amharic/bbc_amharic_radio/liveradio';
import addIdsToBlocks from '../../routes/getInitialData/mediapage/addIdsToBlocks';

const pageData = addIdsToBlocks(amharicPageData);

describe('Media Page Main', () => {
  shouldMatchSnapshot(
    'should match snapshot',
    <ServiceContextProvider service="amharic">
      <RequestContextProvider
        bbcOrigin="https://www.test.bbc.co.uk"
        isAmp={false}
        pageType="media"
        pathname="/pathname"
        service="amharic"
        statusCode={200}
      >
        <MediaPageMain pageData={pageData} />
      </RequestContextProvider>
    </ServiceContextProvider>,
  );
});
