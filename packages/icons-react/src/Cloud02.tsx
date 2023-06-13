import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Cloud02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6.6 17.5c-1.9882 0-3.6-1.6118-3.6-3.6 0-1.6778 1.1478-3.0875 2.701-3.4868A6.3677 6.3677 0 0 1 5.7 10.3C5.7 6.8206 8.5206 4 12 4c3.2489 0 5.9234 2.4592 6.2635 5.6177C19.8555 10.1633 21 11.673 21 13.45c0 2.2368-1.8132 4.05-4.05 4.05H6.6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Cloud02);
const Memo = memo(ForwardRef);
export default Memo;
