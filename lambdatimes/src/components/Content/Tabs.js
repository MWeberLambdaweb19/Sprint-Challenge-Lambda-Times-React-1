import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tabItem, index) => 
        <Tab key={index} 
          tabProps={tabItem} 
          classNameProps={props.selectedTab}
          selectTabHandlerProps={props.selectTabHandler}
        /> )}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabss: PropTypes.array
}

export default Tabs;
