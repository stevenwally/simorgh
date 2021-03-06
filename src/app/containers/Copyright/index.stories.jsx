import React from 'react';
import { storiesOf } from '@storybook/react';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import { withKnobs } from '@storybook/addon-knobs';
import CopyrightContainer from '.';
import services from '#testHelpers/serviceConfigs';
import { ServiceContext } from '#contexts/ServiceContext';

storiesOf('Containers|Copyright', module)
  .addParameters({ chromatic: { disable: true } })
  .addDecorator(withKnobs)
  .add(
    'default',
    inputProvider({
      // eslint-disable-next-line react/prop-types
      componentFunction: ({ service }) => {
        const imageCaptionText =
          services[service].imageCopyrightOffscreenText || 'Image source, ';

        const serviceContextStub = {
          imageCaptionOffscreenText: imageCaptionText,
          lang: services[service].lang,
          dir: services[service].dir,
        };
        return (
          <ServiceContext.Provider value={serviceContextStub}>
            <CopyrightContainer>{imageCaptionText}</CopyrightContainer>
          </ServiceContext.Provider>
        );
      },
      services: Object.keys(services),
    }),
  );
