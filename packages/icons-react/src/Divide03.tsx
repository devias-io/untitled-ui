import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Divide03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 8.4h.009M12 15.6h.009M7.5 12h9m-4.05-3.6a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Zm0 7.2a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0ZM21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Divide03);
const Memo = memo(ForwardRef);
export default Memo;
