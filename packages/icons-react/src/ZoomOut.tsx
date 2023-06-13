import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ZoomOut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m21 21-4.35-4.35M8 11h6m5 0c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ZoomOut);
const Memo = memo(ForwardRef);
export default Memo;
