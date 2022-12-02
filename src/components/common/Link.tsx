import type { FC, HTMLProps } from 'react';
import type { ChildrenProps } from 'types/children';

import styles from 'styles/Link.module.scss';

export type LinkProps = ChildrenProps & HTMLProps<HTMLAnchorElement>;

const Link: FC<LinkProps> = ({ children, ...props }) => (
  <a
    className={styles.link}
    {...props}
  >
    {children}
  </a>
);

export default Link;
