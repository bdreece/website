import type { FC } from 'react';
import type { LinkProps } from './Link';

import Link from './Link';

export type ExternalLinkProps = Omit<LinkProps, 'animated'>;

const ExternalLink: FC<ExternalLinkProps> = ({ children, ...props }) => (
  <Link
    animated={false}
    target='_blank'
    {...props}
  >
    <>
      {children}
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        width={24}
        height={24}
        viewBox='0 0 30 30'
        enableBackground='new 0 0 30 30'
        xmlSpace='preserve'
      >
        <g>
          <g>
            <g>
              <g>
                <g>
                  <path
                    fill='#231815'
                    d='M16.5,27.5c-1,0-2.1-0.4-2.9-1.2c-0.8-0.8-1.2-1.8-1.2-2.9c0-1.1,0.4-2.1,1.2-2.9l1.9-1.9
						c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-1.9,1.9c-0.6,0.6-0.9,1.3-0.9,2.2s0.3,1.6,0.9,2.2c1.2,1.2,3.2,1.2,4.3,0l1.9-1.9
						c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7l-1.9,1.9C18.6,27.1,17.6,27.5,16.5,27.5z'
                  />
                </g>
                <g>
                  <path
                    fill='#231815'
                    d='M24.1,21.4c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l1.9-1.9c1.2-1.2,1.2-3.1,0-4.3
						c-1.2-1.2-3.1-1.2-4.3,0l-1.9,1.9c-0.2,0.2-0.5,0.2-0.7,0s-0.2-0.5,0-0.7l1.9-1.9c1.6-1.6,4.1-1.6,5.7,0c1.6,1.6,1.6,4.1,0,5.7
						l-1.9,1.9C24.3,21.4,24.2,21.4,24.1,21.4z'
                  />
                </g>
                <g>
                  <path
                    fill='#231815'
                    d='M16.5,24c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l6.9-6.9c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7
						l-6.9,6.9C16.8,23.9,16.7,24,16.5,24z'
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  </Link>
);

export default ExternalLink;
