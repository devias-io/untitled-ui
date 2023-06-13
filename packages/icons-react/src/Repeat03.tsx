import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Repeat03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m12.9 20-2.7-2.7m0 0 2.7-2.7m-2.7 2.7h4.5c3.4794 0 6.3-2.8206 6.3-6.3 0-2.5132-1.4715-4.6826-3.6-5.6937M6.6 16.6937C4.4716 15.6826 3 13.5132 3 11c0-3.4794 2.8206-6.3 6.3-6.3h4.5m0 0L11.1 2m2.7 2.7-2.7 2.7"
    />
  </svg>
);
const ForwardRef = forwardRef(Repeat03);
const Memo = memo(ForwardRef);
export default Memo;
