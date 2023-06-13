import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CloudBlank02 = (
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
      d="M9.75 17.5C6.022 17.5 3 14.4779 3 10.75 3 7.022 6.022 4 9.75 4c2.5944 0 4.847 1.4637 5.9769 3.6104A5.0198 5.0198 0 0 1 16.05 7.6c2.7338 0 4.95 2.2162 4.95 4.95s-2.2162 4.95-4.95 4.95h-6.3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CloudBlank02);
const Memo = memo(ForwardRef);
export default Memo;
