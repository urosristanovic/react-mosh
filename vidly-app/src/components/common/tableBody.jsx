import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class TableBody extends React.Component {
  renderCell = (item, column) => {
    if (column.path === 'title') {
      const link = '/movies/' + item._id;
      item.title = (
        <Link to={link} className='no-decoration'>
          {item.title}
        </Link>
      );
    }
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
