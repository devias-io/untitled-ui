import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Strikethrough02 = (
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
      d="M6 16c0 2.2091 1.7909 4 4 4h4c2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4m-3.5 8c2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4M18 8c0-2.2091-1.7909-4-4-4h-4C7.7909 4 6 5.7909 6 8m7.5-4c-2.2091 0-4 1.7909-4 4M3 12h18"
    />
  </svg>
);
const ForwardRef = forwardRef(Strikethrough02);
const Memo = memo(ForwardRef);
export default Memo;
