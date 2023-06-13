import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CodeCircle01 = (
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
      d="m14.25 13.7 2.7-2.7-2.7-2.7m-4.5 0L7.05 11l2.7 2.7M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CodeCircle01);
const Memo = memo(ForwardRef);
export default Memo;
