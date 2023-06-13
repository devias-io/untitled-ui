import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const LetterSpacing02 = (
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
      d="M3 16.5h18m-18 0 2.7-2.7M3 16.5l2.7 2.7M21 16.5l-2.7-2.7m2.7 2.7-2.7 2.7M7.5 3h9M12 3v9.9"
    />
  </svg>
);
const ForwardRef = forwardRef(LetterSpacing02);
const Memo = memo(ForwardRef);
export default Memo;
