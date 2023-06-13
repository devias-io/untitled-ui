import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const GitPullRequest = (
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
      d="M18 15c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3 3-1.3431 3-3-1.3431-3-3-3Zm0 0V8a1.9999 1.9999 0 0 0-2-2h-3M6 9c1.6569 0 3-1.3431 3-3S7.6569 3 6 3 3 4.3431 3 6s1.3431 3 3 3Zm0 0v12"
    />
  </svg>
);
const ForwardRef = forwardRef(GitPullRequest);
const Memo = memo(ForwardRef);
export default Memo;
