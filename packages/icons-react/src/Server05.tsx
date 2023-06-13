import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Server05 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17.4 9.3c0 3.4794-2.8206 6.3-6.3 6.3m6.3-6.3c0-3.4794-2.8206-6.3-6.3-6.3m6.3 6.3H4.8m6.3 6.3c-3.4794 0-6.3-2.8206-6.3-6.3m6.3 6.3a9.6396 9.6396 0 0 0 2.5208-6.3A9.6395 9.6395 0 0 0 11.1 3m0 12.6a9.6383 9.6383 0 0 1-2.5192-6.3A9.6382 9.6382 0 0 1 11.1 3m0 12.6v1.8M4.8 9.3C4.8 5.8206 7.6206 3 11.1 3m1.8 16.2c0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8m3.6 0c0-.9941-.8059-1.8-1.8-1.8m1.8 1.8h6.3m-9.9 0c0-.9941.8059-1.8 1.8-1.8m-1.8 1.8H3"
    />
  </svg>
);
const ForwardRef = forwardRef(Server05);
const Memo = memo(ForwardRef);
export default Memo;
