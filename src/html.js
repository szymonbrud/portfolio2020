/*eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            zIndex: 1,
          }}
        >
          <h1>ŁADOWANIE</h1>
        </div>
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

/* eslint-enable */
