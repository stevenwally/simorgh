import path from 'ramda/src/path';
import pathOr from 'ramda/src/pathOr';
import { buildATIPageTrackPath } from '../../atiUrl';
import { getPublishedDatetime } from '../../../../lib/analyticsUtils';

export const buildCPSATIParams = (pageData, requestContext, serviceContext) => {
  const { platform, statsDestination } = requestContext;
  const {
    atiAnalyticsAppName,
    atiAnalyticsProducerId,
    service,
  } = serviceContext;

  const { metadata, promo } = pageData;

  // ATI gets it's "Chapter 1" value from a prefix to the page identifier
  // eg embedded_media::pidgin.embedded_media.media_asset.49529724.page
  const pageIdentifierPrefix = pathOr(
    '.Unknown',
    ['analyticsLabels', 'counterName'],
    metadata,
  ).split('.')[1];

  const page = path(['analyticsLabels', 'counterName'], metadata);

  return {
    appName: atiAnalyticsAppName,
    contentId: metadata.id,
    contentType: 'article-media-asset',
    language: metadata.language,
    pageIdentifier: `${pageIdentifierPrefix}::${page}`,
    pageTitle: path(['headlines', 'headline'], promo),
    timePublished: getPublishedDatetime('firstPublished', pageData),
    timeUpdated: getPublishedDatetime('lastPublished', pageData),
    categoryName: path(['passport', 'category', 'categoryName'], metadata),
    campaigns: path(['passport', 'campaigns'], metadata),
    producerId: atiAnalyticsProducerId,
    statsDestination,
    platform,
    service,
  };
};

export const buildCPSATIUrl = (pageData, requestContext, serviceContext) => {
  return buildATIPageTrackPath(
    buildCPSATIParams(pageData, requestContext, serviceContext),
  );
};