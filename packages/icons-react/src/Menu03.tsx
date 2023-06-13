import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Menu03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 12h18M3 6h18M3 18h12"
    />
  </svg>
);
const ForwardRef = forwardRef(Menu03);
const Memo = memo(ForwardRef);
export default Memo;
