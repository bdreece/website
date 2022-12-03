import type { FC, CSSProperties } from 'react';
import type { LinkProps } from './Link';

import Link from './Link';
import styles from 'styles/NavLink.module.scss';

export type NavLinkProps = LinkProps & {
  label: string;
  icon: string;
  orientation?: 'row' | 'column';
};

const NavLink: FC<NavLinkProps> = ({
  label,
  icon,
  orientation = 'column',
  ...props
}) => {
  const span: CSSProperties = {
    flexDirection: orientation,
    justifyContent: orientation === 'row' ? 'space-around' : 'center',
  };

  const img: CSSProperties = {
    marginInline: orientation === 'column' ? 'auto' : undefined,
  };

  const div: CSSProperties = {
    marginBlock: orientation === 'row' ? 'auto' : undefined,
  };

  const navlink =
    orientation === 'row'
      ? styles.navlink
      : `${styles.navlink} ${styles.navlinkAnimated}`;

  return (
    <li className={navlink}>
      <Link {...props}>
        <>
          <span style={span}>
            <img
              src={icon}
              alt='icon'
              height={64}
              width={64}
              style={img}
            />
            <div style={div}>{label}</div>
          </span>
        </>
      </Link>
    </li>
  );
};

export default NavLink;
