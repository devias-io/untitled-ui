import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Database01 = (
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
      d="M19.2 5.7c0 1.4912-3.6265 2.7-8.1 2.7S3 7.1912 3 5.7m16.2 0c0-1.4912-3.6265-2.7-8.1-2.7S3 4.2088 3 5.7m16.2 0v12.6c0 1.494-3.6 2.7-8.1 2.7S3 19.794 3 18.3V5.7M19.2 12c0 1.494-3.6 2.7-8.1 2.7S3 13.494 3 12"
    />
  </svg>
);
const ForwardRef = forwardRef(Database01);
const Memo = memo(ForwardRef);
export default Memo;
