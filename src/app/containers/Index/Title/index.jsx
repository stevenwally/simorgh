/* eslint-disable jsx-a11y/aria-role */
import React, { useContext } from 'react';
import { node, bool } from 'prop-types';
import styled from 'styled-components';
import VisuallyHiddenText from '@bbc/psammead-visually-hidden-text';
import { getParagon, GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
import {
  GEL_GROUP_2_SCREEN_WIDTH_MIN,
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_4_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
  GEL_SPACING_QUAD,
} from '@bbc/gel-foundations/spacings';
import { C_EBON } from '@bbc/psammead-styles/colours';
import { ServiceContext } from '#contexts/ServiceContext';

const Heading = styled.h1`
  ${({ script }) => (script ? getParagon(script) : '')};
  font-family: ${GEL_FF_REITH_SANS};
  color: ${C_EBON};
  margin: 0;
  margin-top: ${GEL_SPACING};

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    margin-top: ${GEL_SPACING_DBL};
  }

  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    margin-top: ${GEL_SPACING_TRPL};
  }

  @media (min-width: ${GEL_GROUP_4_SCREEN_WIDTH_MIN}) {
    margin-top: ${GEL_SPACING_QUAD};
  }
`;

const Title = ({ children, isVisuallyHidden }) => {
  const { script } = useContext(ServiceContext);

  return isVisuallyHidden ? (
    <VisuallyHiddenText id="content" tabIndex="-1" as="h1">
      <span role="text">{children}</span>
    </VisuallyHiddenText>
  ) : (
    <Heading script={script} id="content" tabIndex="-1">
      {children}
    </Heading>
  );
};

Title.propTypes = {
  children: node.isRequired,
  isVisuallyHidden: bool,
};

Title.defaultProps = {
  isVisuallyHidden: false,
};

export default Title;