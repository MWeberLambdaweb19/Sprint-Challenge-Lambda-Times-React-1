import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "ALL",
      tabs: [],
      cards: [],
      filteredCards: [],
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData,
    })
  }

  selectTabHandler = tab => {
    if (this.state.selected === tab.target.innerHTML) {
      return;
    } else {
      this.setState({selected: tab.target.innerHTML})
      console.log(this.state.selected)
    }
  };

  filterCards = () => {
    if(this.state.selected === "ALL"){
      return this.state.cards;
    }
    else {
      const newCards = this.state.cards.filter(c => c.tab === this.state.selected);
      return newCards
    }
  };

  logout = () => {
    localStorage.removeItem(`user`)
    window.location.reload()
  }

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs 
        tabs={this.state.tabs} 
        selectedTab={this.state.selected} 
        selectTabHandler={this.selectTabHandler}/>
        <Cards cards={this.filterCards()} />
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
