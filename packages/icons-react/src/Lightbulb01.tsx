import * as React from 'react';
import { SVGProps } from 'react';
const Lightbulb01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.95 16.05v2.25c0 .8387 0 1.258-.137 1.5888a1.8 1.8 0 0 1-.9742.9742C12.508 21 12.0887 21 11.25 21s-1.258 0-1.5888-.137a1.8 1.8 0 0 1-.9742-.9742c-.137-.3308-.137-.7501-.137-1.5888v-2.25m5.4 0c2.384-1.0416 4.05-3.5321 4.05-6.3C18 6.022 14.9779 3 11.25 3 7.522 3 4.5 6.022 4.5 9.75c0 2.7679 1.666 5.2584 4.05 6.3m5.4 0h-5.4"
    />
  </svg>
);
export default Lightbulb01;
