import type { FC } from 'react';
import type { InlineStyles } from 'types/styles';
import type { LinkProps } from './Link';

import Link from './Link';
import styles from 'styles/NavLink.module.scss';

export type NavLinkProps = LinkProps & {
  label: string;
  icon: string;
  index: number;
  orientation?: 'row' | 'column';
};

const NavLink: FC<NavLinkProps> = ({
  label,
  icon,
  index,
  orientation = 'column',
  ...props
}) => {
  const inline: InlineStyles = {
    li: {
      animationDelay: `${(index + 1) * 50}ms`,
    },
    span: {
      flexDirection: orientation,
      justifyContent: orientation === 'row' ? 'space-around' : 'center',
    },
    img: {
      marginInline: orientation === 'column' ? 'auto' : undefined,
    },
    div: {
      marginBlock: orientation === 'row' ? 'auto' : undefined,
    },
  };

  const navlink =
    orientation === 'row'
      ? styles.navlink
      : `${styles.navlink} ${styles.navlinkAnimated}`;

  return (
    <li
      className={navlink}
      style={inline.li}
    >
      <Link {...props}>
        <>
          <span style={inline.span}>
            <img
              src={icon}
              alt='&otimes;'
              height={64}
              width={64}
              style={inline.img}
            />
            <div style={inline.div}>{label}</div>
          </span>
        </>
      </Link>
    </li>
  );
};

export default NavLink;
