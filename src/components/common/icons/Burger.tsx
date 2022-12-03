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
