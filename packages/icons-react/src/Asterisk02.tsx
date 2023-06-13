import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Asterisk02 = (
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
      d="M12 4v16m6-14L6 18m14-6H4m14 6L6 6"
    />
  </svg>
);
const ForwardRef = forwardRef(Asterisk02);
const Memo = memo(ForwardRef);
export default Memo;
