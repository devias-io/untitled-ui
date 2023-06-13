import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Subscript = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m3 5 10 10m0-10L3 15m18 4.0001h-4c0-1.5.44-2 1.5-2.5s2.5-1.17 2.5-2.5c0-.47-.17-.93-.48-1.29a2.1098 2.1098 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
    />
  </svg>
);
const ForwardRef = forwardRef(Subscript);
const Memo = memo(ForwardRef);
export default Memo;
