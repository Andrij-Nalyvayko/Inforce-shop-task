import React from 'react';

export class Table extends React.Component {
  state = {};

  render() {
    return (
      <>
        <thead className="thead">
          <th className="th">
            Name
          </th>
          <th className="th">
            Count
          </th>
          <th className="th">
            Width
          </th>
          <th className="th">
            Height
          </th>
          <th className="th">
            Weight
          </th>
          <th className="th">
            Comments
          </th>
        </thead>
      </>
    )
  }
}