import React from 'react';
import Icon from './Icon';

import './ReorderItem.scss';

function ReorderItem(props) {
  const { children, onDelete } = props;
  return (
    <div className="reorder-item">
      <span className="reorder-item__handle">
        <Icon id="hamburger" />
      </span>
      <span className="reorder-item__content">
        {children}
      </span>
      <span className="reorder-item__delete" onClick={onDelete}>
        <Icon id="trash" />
      </span>
    </div>
  );
}

export default ReorderItem;
