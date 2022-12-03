import type { FC } from 'react';

export type BurgerProps = {
  width?: number;
  height?: number;
};

const Burger: FC<BurgerProps> = ({ width = 64, height = 64 }) => (
  <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    x='0px'
    y='0px'
    width={width}
    height={height}
    viewBox='0 0 40 40'
    enableBackground='new 0 0 40 40'
    xmlSpace='preserve'
  >
    <g>
      <g>
        <g>
          <g>
            <path
              fill='#231815'
              d='M26,16H14c-0.3,0-0.5-0.2-0.5-0.5S13.7,15,14,15h12c0.3,0,0.5,0.2,0.5,0.5S26.3,16,26,16z'
            />
          </g>
          <g>
            <path
              fill='#231815'
              d='M26,20.5H14c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h12c0.3,0,0.5,0.2,0.5,0.5S26.3,20.5,26,20.5z'
            />
          </g>
          <g>
            <path
              fill='#231815'
              d='M26,25H14c-0.3,0-0.5-0.2-0.5-0.5S13.7,24,14,24h12c0.3,0,0.5,0.2,0.5,0.5S26.3,25,26,25z'
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default Burger;
