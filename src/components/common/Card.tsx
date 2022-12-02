import type { FC, CSSProperties as CSS } from 'react';
import type { ChildrenProps } from 'types/children';

import styles from 'styles/Card.module.scss';

export type CardProps = ChildrenProps & {
  title: string;
};

const Card: FC<CardProps> = ({ children, title }) => {
  return (
    <article className={styles.card}>
      <h2>{title}</h2>
      <section>{children}</section>
    </article>
  );
};

export default Card;
