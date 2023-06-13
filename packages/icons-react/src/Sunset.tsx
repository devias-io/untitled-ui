import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Sunset = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4.8 16.4H3m3.8827-5.1173-1.2728-1.2728m11.5073 1.2728 1.2728-1.2728M21 16.4h-1.8m-11.7 0c0-2.4853 2.0147-4.5 4.5-4.5s4.5 2.0147 4.5 4.5M21 20H3M15.6 4.7 12 8.3m0 0L8.4 4.7M12 8.3V2"
    />
  </svg>
);
const ForwardRef = forwardRef(Sunset);
const Memo = memo(ForwardRef);
export default Memo;
