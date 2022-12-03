import type { FC, HTMLProps } from 'react';
import type { ChildrenProps } from 'types/children';
import type { InlineStyles } from 'types/styles';

import styles from 'styles/Link.module.scss';

export type LinkProps = ChildrenProps &
  HTMLProps<HTMLAnchorElement> & {
    animated?: boolean;
  };

const Link: FC<LinkProps> = ({ children, animated = true, ...props }) => {
  const link = animated ? styles.linkAnimated : styles.link;
  return (
    <a
      className={link}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
