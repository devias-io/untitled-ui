import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Award02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.75 14.7812V21l4.2326-1.693c.0988-.0396.1482-.0593.1992-.0671a.4456.4456 0 0 1 .1364 0c.051.0078.1004.0275.1992.0671L15.75 21v-6.2188M18 9.75c0 3.7279-3.0221 6.75-6.75 6.75-3.728 0-6.75-3.0221-6.75-6.75C4.5 6.022 7.522 3 11.25 3 14.9779 3 18 6.022 18 9.75Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Award02);
const Memo = memo(ForwardRef);
export default Memo;
