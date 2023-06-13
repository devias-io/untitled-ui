import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const MoonEclipse = (
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
      d="M18.2016 6.6002C20.6 9.7905 20.5995 14.212 18.2 17.4018M11 21c1.414 0 2.7518-.3261 3.9423-.9071A8.2723 8.2723 0 0 1 14.6 20.1c-4.4735 0-8.1-3.6265-8.1-8.1s3.6265-8.1 8.1-8.1c.1147 0 .2288.0024.3423.0071C13.7517 3.3261 12.414 3 11 3c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(MoonEclipse);
const Memo = memo(ForwardRef);
export default Memo;
