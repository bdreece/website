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
      <h2>{title}</h2>
      {description && (
        <section>
          <p>{description}</p>
        </section>
      )}
      {children}
    </article>
  );
};

export default Card;
