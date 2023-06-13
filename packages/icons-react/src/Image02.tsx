import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Image02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m6.5996 18.2004 7.9822-7.9822c.3564-.3564.5346-.5346.7401-.6014a.9.9 0 0 1 .5562 0c.2055.0668.3837.245.7401.6014l3.8465 3.8465M10.65 7.85c0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8 0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8ZM21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Image02);
const Memo = memo(ForwardRef);
export default Memo;
