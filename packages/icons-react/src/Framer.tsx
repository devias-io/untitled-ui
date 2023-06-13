import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Framer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 15.5v7l-7-7m0 0v-7h7m-7 7h14l-7-7m0 0h7v-7H5l7 7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Framer);
const Memo = memo(ForwardRef);
export default Memo;
