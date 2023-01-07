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
import type { InlineStyles } from 'types/styles';
import type { LinkProps } from './Link';

import { lazy, Suspense } from 'react';

const Link = lazy(() => import('./Link'));
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
      <Suspense>
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
      </Suspense>
    </li>
  );
};

export default NavLink;
