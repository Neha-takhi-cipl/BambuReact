import React from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from "glamor";
const spinDelay = keyframes("spinDelay", {
  "0%": { transform: 'rotate(0deg)' },
  "100%": { transform: "rotate(360deg)" },
});
export const SpinWrapper = css({
  "padding": '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '500px',
  "& .spinner": {
    display: "inline-block",
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    border: '4px solid #67a36b',
    borderTopColor: '#d5ffdc',
    animation: `${spinDelay} 1000ms infinite linear`
  }
});


const Spinner = ({ delay, ...rest }) => (
  <div {...css(SpinWrapper)}>


    <div className="spinner" />
  </div>
);

Spinner.displayName = 'Spinner';

Spinner.propTypes = {
  delay: PropTypes.number,
};

Spinner.defaultProps = {
  delay: 1000,
};

export default Spinner;
