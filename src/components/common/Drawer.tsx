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
import type { FC, CSSProperties } from 'react';
import type { InlineStyles } from 'types/styles';
import type { NavLinkProps } from './NavLink';

import { useState, lazy, Suspense } from 'react';

const Burger = lazy(() => import('./icons/Burger'));
const NavLink = lazy(() => import('./NavLink'));
import styles from 'styles/Drawer.module.scss';

export type DrawerProps = {
  links?: NavLinkProps[];
};

const Drawer: FC<DrawerProps> = ({ links }) => {
  const [opened, setOpened] = useState(false);
  const inline: InlineStyles = {
    aside: opened
      ? {
          opacity: 1,
        }
      : {
          width: 0,
        },
    display: {
      display: opened ? undefined : 'none',
    },
  };

  const toggle = () => setOpened(opened => !opened);

  return (
    <>
      <button
        className={styles.burger}
        aria-label='Menu'
        onClick={toggle}
      >
        <Suspense>
          <Burger />
        </Suspense>
      </button>
      <aside
        className={styles.drawer}
        style={inline.aside}
      >
        <ul style={inline.display}>
          <Suspense>
            {links?.map(link => (
              <NavLink
                key={link.label}
                orientation='row'
                {...link}
              />
            ))}
          </Suspense>
        </ul>
      </aside>
      <div
        className={styles.overlay}
        style={inline.display}
        onClick={toggle}
      />
    </>
  );
};
export default Drawer;
