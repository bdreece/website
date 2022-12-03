/*
 * website - my friggin website, man
 * Copyright (C) 2022 Brian Reece

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.

 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import type { FC } from 'react';
import type { NavLinkProps } from './NavLink';

import { useState } from 'react';

import Burger from './icons/Burger';
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
      };

  const display = {
    display: opened ? undefined : 'none',
  };

  const toggle = () => setOpened(opened => !opened);

  return (
    <>
      <button
        className={styles.burger}
        aria-label='Menu'
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
              key={link.label}
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
