import React from 'react';

import './Icon.scss';

const hamburger = 'M2.25 18.75a.75.75 0 0 1 0-1.5h19.5a.75.75 0 0 1 0 1.5H2.25zM2.25 12.75a.75.75 0 0 1 0-1.5h19.5a.75.75 0 0 1 0 1.5H2.25zM2.25 6.75a.75.75 0 0 1 0-1.5h19.5a.75.75 0 0 1 0 1.5H2.25z';
const trash = 'M9.75 17.25A.75.75 0 0 1 9 16.5v-6a.75.75 0 0 1 1.5 0v6c0 .41-.34.75-.75.75zm4.5 0a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v6c0 .41-.34.75-.75.75zm-7.5 4.5c-1.24 0-2.25-1-2.25-2.25V6.75H2.25a.75.75 0 0 1 0-1.5H7.5V4.5c0-1.24 1-2.25 2.25-2.25h4.5c1.24 0 2.25 1 2.25 2.25v.75h5.25a.75.75 0 0 1 0 1.5H19.5V19.5c0 1.24-1 2.25-2.25 2.25H6.75zM6 19.5c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75V6.75H6V19.5zm9-14.25V4.5a.75.75 0 0 0-.75-.75h-4.5A.75.75 0 0 0 9 4.5v.75h6z';

function Icon(props) {
  const { id } = props;
  return (
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {id === 'hamburger' && <path d={hamburger} />}
      {id === 'trash' && <path d={trash} />}
    </svg>
  );
}

export default Icon;
