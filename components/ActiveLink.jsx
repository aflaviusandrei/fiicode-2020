/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { Link } from 'translations';

const propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string,
};
const ActiveLink = ({ router, children, href = null, ...props }) => {
  if (!href) return typeof children === 'function' ? children() : children;
  let isActive = router.pathname === href;
  if (typeof children === 'function')
    return (
      <Link href={href} {...props}>
        {children(isActive)}
      </Link>
    );
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};
ActiveLink.propTypes = propTypes;
export default withRouter(ActiveLink);
