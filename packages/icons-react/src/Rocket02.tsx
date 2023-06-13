import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Rocket02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m12 14.9998-3-3m3 3a22.3554 22.3554 0 0 0 4-2m-4 2v5s3.03-.55 4-2c1.08-1.62 0-5 0-5m-7-1a21.9987 21.9987 0 0 1 2-3.95 12.88 12.88 0 0 1 11-6.05c0 2.72-.78 7.5-6 11m-7-1H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m-6.5 8.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Rocket02);
const Memo = memo(ForwardRef);
export default Memo;
