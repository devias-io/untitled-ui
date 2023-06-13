import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Hash02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m9.5 3-3 18m11-18-3 18m6-13h-17m16 8h-17"
    />
  </svg>
);
const ForwardRef = forwardRef(Hash02);
const Memo = memo(ForwardRef);
export default Memo;
