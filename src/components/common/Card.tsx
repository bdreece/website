import type { FC, CSSProperties as CSS } from 'react';
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
