import * as React from 'react';
import { SVGProps } from 'react';
const Colors = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M12 12.8c2.9823 0 5.4-2.4177 5.4-5.4C17.4 4.4177 14.9823 2 12 2 9.0177 2 6.6 4.4177 6.6 7.4c0 2.9823 2.4177 5.4 5.4 5.4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18.625c.9554.8551 2.217 1.375 3.6 1.375 2.9823 0 5.4-2.4177 5.4-5.4 0-2.4902-1.6856-4.5868-3.9782-5.2108m-10.0436 0C4.6856 10.0132 3 12.1098 3 14.6 3 17.5823 5.4177 20 8.4 20c2.9823 0 5.4-2.4177 5.4-5.4a5.384 5.384 0 0 0-.3782-1.9891M17.4 7.4c0 2.9823-2.4177 5.4-5.4 5.4-2.9823 0-5.4-2.4177-5.4-5.4C6.6 4.4177 9.0177 2 12 2c2.9823 0 5.4 2.4177 5.4 5.4Z"
    />
  </svg>
);
export default Colors;
