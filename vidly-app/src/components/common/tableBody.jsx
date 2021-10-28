import _ from 'lodash';
import React, { Component } from 'react';

class TableBody extends Component {
  renderCell = (item, column) => {
    // if (column.path === 'title') {
    //   const url = '/movies/' + item._id;
    //   item.title = (
    //     <Link to={url} className='no-decoration'>
    //       {item.title}
    //     </Link>
    //   );
    // }
    if (column.content) {
      return column.content(item);
    }
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
