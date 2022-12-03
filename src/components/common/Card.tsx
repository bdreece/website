import type { FC, CSSProperties as CSS } from 'react';
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
import type { ChildrenProps } from 'types/children';

import styles from 'styles/Card.module.scss';

export type CardProps = ChildrenProps & {
  title: string;
  description?: string;
};

const Card: FC<CardProps> = ({ children, title, description }) => {
  return (
    <article className={styles.card}>
      <section>
        <h2>{title}</h2>
        {description && (
          <>
            <p>//</p>
            <i>{description}</i>
          </>
        )}
      </section>
      {children}
    </article>
  );
};

export default Card;
