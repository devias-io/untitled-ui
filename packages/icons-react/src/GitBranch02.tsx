import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const GitBranch02 = (
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
      d="M6 3v12m0 0c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3 3-1.3431 3-3m-3-3c1.6569 0 3 1.3431 3 3m9-9c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3Zm0 0a9.0004 9.0004 0 0 1-2.636 6.364A9.0004 9.0004 0 0 1 9 18"
    />
  </svg>
);
const ForwardRef = forwardRef(GitBranch02);
const Memo = memo(ForwardRef);
export default Memo;
