import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Loading02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 3v3.6m0 10.8V21m-5.4-9H3m18 0h-3.6m.9706 6.3706L15.825 15.825M18.3706 5.7 15.825 8.2455M5.6294 18.3706 8.175 15.825M5.6294 5.7 8.175 8.2455"
    />
  </svg>
);
const ForwardRef = forwardRef(Loading02);
const Memo = memo(ForwardRef);
export default Memo;
