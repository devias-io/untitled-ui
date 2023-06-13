import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Code02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m16.5 15.6 4.5-4.5-4.5-4.5m-9 0L3 11.1l4.5 4.5M13.8 3l-3.6 16.2"
    />
  </svg>
);
const ForwardRef = forwardRef(Code02);
const Memo = memo(ForwardRef);
export default Memo;
