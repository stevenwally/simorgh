import React from 'react';
import { oneOfType, shape } from 'prop-types';
import { RequestContext } from '../../contexts/RequestContext';
import CanonicalATIAnalytics from './canonical';
import AmpATIAnalytics from './amp';
import ArticleAtiParams from './ArticleAtiParams';
import FrontPageAtiParams from './FrontPageAtiParams';

import { articleDataPropTypes } from '../../models/propTypes/article';
import { frontPageDataPropTypes } from '../../models/propTypes/frontPage';

const ATIAnalytics = ({ data }) => {
  const { pageType, platform } = React.useContext(RequestContext);

  let pageviewParams = '';
  switch (pageType) {
    case 'article':
      pageviewParams = ArticleAtiParams(data);
      break;
    case 'frontPage':
      pageviewParams = FrontPageAtiParams(data);
      break;
    default:
      return null;
  }

  return platform === 'amp' ? (
    <AmpATIAnalytics pageviewParams={pageviewParams} />
  ) : (
    <CanonicalATIAnalytics pageviewParams={pageviewParams} />
  );
};

ATIAnalytics.propTypes = {
  data: oneOfType([articleDataPropTypes, shape(frontPageDataPropTypes)])
    .isRequired,
};
export default ATIAnalytics;
