import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Toggle02Right = (
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
      d="M13.9995 16H6c-2.2091 0-4-1.7909-4-4 0-2.2091 1.7909-4 4-4h7.9995m8 4c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Toggle02Right);
const Memo = memo(ForwardRef);
export default Memo;
