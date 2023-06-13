import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Microphone02 = (
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
      d="M20 12v1c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8v-1m8 5c-2.2091 0-4-1.7909-4-4V7c0-2.2091 1.7909-4 4-4 2.2091 0 4 1.7909 4 4v6c0 2.2091-1.7909 4-4 4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Microphone02);
const Memo = memo(ForwardRef);
export default Memo;
