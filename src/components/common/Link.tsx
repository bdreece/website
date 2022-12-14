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
import type { FC, HTMLProps } from 'react';
import type { ChildrenProps } from 'types/children';

import styles from 'styles/Link.module.scss';

export type LinkProps = ChildrenProps &
  Omit<HTMLProps<HTMLAnchorElement>, 'ref'> & {
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
