import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const DotsHorizontal = (
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
      d="M12 13c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Zm7 0c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1ZM5 13c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(DotsHorizontal);
const Memo = memo(ForwardRef);
export default Memo;
