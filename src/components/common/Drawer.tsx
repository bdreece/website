import type { FC } from 'react';
import type { NavLinkProps } from './NavLink';

import { useState } from 'react';

import Burger from './Burger';
import NavLink from './NavLink';
import styles from 'styles/Drawer.module.scss';

export type DrawerProps = {
  links?: NavLinkProps[];
};

const Drawer: FC<DrawerProps> = ({ links }) => {
  const [opened, setOpened] = useState(false);
  const aside = opened
    ? {
        opacity: 1,
      }
    : {
        width: 0,
        right: 1,
      };

  const display = {
    display: opened ? undefined : 'none',
  };

  const toggle = () => setOpened(opened => !opened);

  return (
    <>
      <button
        className={styles.burger}
        onClick={toggle}
      >
        <Burger />
      </button>
      <aside
        className={styles.drawer}
        style={aside}
      >
        <ul style={display}>
          {links?.map(link => (
            <NavLink
              orientation='row'
              {...link}
            />
          ))}
        </ul>
      </aside>
      <div
        className={styles.overlay}
        style={display}
        onClick={toggle}
      />
    </>
  );
};
export default Drawer;
