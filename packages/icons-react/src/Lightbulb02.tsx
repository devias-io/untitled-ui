import * as React from 'react';
import { SVGProps } from 'react';
const Lightbulb02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M12 16.4c2.9823 0 5.4-2.4177 5.4-5.4 0-2.9823-2.4177-5.4-5.4-5.4-2.9823 0-5.4 2.4177-5.4 5.4 0 2.9823 2.4177 5.4 5.4 5.4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.2 16.0927V18.2c0 .9941.8059 1.8 1.8 1.8.9941 0 1.8-.8059 1.8-1.8v-2.1073M12 2v.9M3.9 11H3m3.15-5.85-.54-.54m12.24.54.5402-.54M21 11h-.9m-2.7 0c0 2.9823-2.4177 5.4-5.4 5.4-2.9823 0-5.4-2.4177-5.4-5.4 0-2.9823 2.4177-5.4 5.4-5.4 2.9823 0 5.4 2.4177 5.4 5.4Z"
    />
  </svg>
);
export default Lightbulb02;
