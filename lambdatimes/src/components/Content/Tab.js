import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  return (
    <div
      className={(props.tabProps === props.classNameProps) ? "tab active-tab" : "tab"}
      onClick={
        (tabProps) => {
          props.selectTabHandlerProps(tabProps)
      }}
    >
      {props.tabProps.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tabProps: PropTypes.string
}

export default Tab;
