import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Signal03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.7272 12.2728c-.7029-.703-.7029-1.8426 0-2.5456.703-.703 1.8426-.703 2.5456 0 .7029.703.7029 1.8426 0 2.5456m-5.0912 2.5456c-2.1088-2.1089-2.1088-5.528 0-7.6368 2.1089-2.1088 5.5279-2.1088 7.6368 0 2.1088 2.1088 2.1088 5.5279 0 7.6368M5.636 17.364c-3.5147-3.5148-3.5147-9.2132 0-12.728 3.5148-3.5147 9.2132-3.5147 12.728 0 3.5147 3.5148 3.5147 9.2132 0 12.728"
    />
  </svg>
);
const ForwardRef = forwardRef(Signal03);
const Memo = memo(ForwardRef);
export default Memo;
