import React, { Component } from "react";

class Filter extends Component {
  render() {
    const { onCategoryChange } = this.props;

    return (
      <div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    );
  }
}

export default Filter;
