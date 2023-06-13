import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Award01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.9667 14.7219 7 22l4.5884-2.753c.1497-.0898.2245-.1347.3044-.1523a.5.5 0 0 1 .2144 0c.0799.0176.1547.0625.3044.1523L17 22l-.9657-7.2788M19 9c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Award01);
const Memo = memo(ForwardRef);
export default Memo;
