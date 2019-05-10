import React, { forwardRef } from 'react';
import Icon from './Icon';

import './ReorderItem.scss';

const ReorderItem = forwardRef((props, ref) => {
  const { children, onDelete, ...rest } = props;
  return (
    <div className="reorder-item" {...rest} ref={ref}>
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
});

export default ReorderItem;
