import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;

    return (
      <div className='row'>
        <div className='col-1 p-2'>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className='col'>
          <button
            onClick={() => onIncrement(counter)}
            className='btn btn-secondary btn-sm m-1 col-1'
          >
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className='btn btn-secondary btn-sm m-1 col-1'
            disabled={counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className='btn btn-danger btn-sm m-1 col-1'
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes =
      'd-flex align-items-center justify-content-center badge w-100 h-100 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
