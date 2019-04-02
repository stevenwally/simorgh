import React from 'react';
import { number } from 'prop-types';
import Timestamp from '../../components/Timestamp';
import relativeTime from './relativeTimestamp';
import {
  longNumeric,
  shortAlphaNumeric,
  alphaNumericDatetime,
  isValidDateTime,
  formatUnixTimestamp,
  isTenHoursAgoOrLess,
  isTwentyFourHoursAgoOrLess,
} from './timestampUtilities';
import { GridItemConstrainedMedium } from '../../lib/styledGrid';

const formatType = timestamp =>
  isTwentyFourHoursAgoOrLess(timestamp)
    ? alphaNumericDatetime
    : shortAlphaNumeric;

const humanReadable = ({ timestamp, shouldMakeRelative }) =>
  shouldMakeRelative
    ? relativeTime(timestamp)
    : formatUnixTimestamp(timestamp, formatType(timestamp));

const TimestampContainer = ({ lastPublished, firstPublished }) => {
  if (
    !isValidDateTime(new Date(lastPublished)) ||
    !isValidDateTime(new Date(firstPublished))
  ) {
    return null;
  }

  const firstPublishedString = humanReadable({
    timestamp: firstPublished,
    shouldMakeRelative:
      lastPublished === firstPublished && isTenHoursAgoOrLess(firstPublished),
  });

  const lastPublishedString = `Updated ${humanReadable({
    timestamp: lastPublished,
    shouldMakeRelative: isTenHoursAgoOrLess(lastPublished),
  })}`;

  return (
    <GridItemConstrainedMedium>
      <Timestamp datetime={formatUnixTimestamp(firstPublished, longNumeric)}>
        {firstPublishedString}
      </Timestamp>
      {lastPublished !== firstPublished ? (
        <Timestamp datetime={formatUnixTimestamp(lastPublished, longNumeric)}>
          {lastPublishedString}
        </Timestamp>
      ) : null}
    </GridItemConstrainedMedium>
  );
};

TimestampContainer.propTypes = {
  firstPublished: number.isRequired,
  lastPublished: number.isRequired,
};

export default TimestampContainer;
