import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Asterisk01 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M12 3v18m6.364-15.364L5.636 18.364M21 12H3m15.364 6.364L5.636 5.636"
    />
  </svg>
);
const ForwardRef = forwardRef(Asterisk01);
const Memo = memo(ForwardRef);
export default Memo;
