import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const DotsVertical = (
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
      d="M12 13c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Zm0-7c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Zm0 14c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(DotsVertical);
const Memo = memo(ForwardRef);
export default Memo;
