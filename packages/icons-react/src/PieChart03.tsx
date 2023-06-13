import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const PieChart03 = (
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
      d="M12 2a9.0005 9.0005 0 0 1 6.364 2.636A9.0004 9.0004 0 0 1 21 11m-9-9v9m0-9c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9 9-4.0294 9-9m-9-9c4.9706 0 9 4.0294 9 9m0 0h-9m9 0a9 9 0 0 1-3.7099 7.2812L12 11"
    />
  </svg>
);
const ForwardRef = forwardRef(PieChart03);
const Memo = memo(ForwardRef);
export default Memo;
