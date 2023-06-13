import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SearchLg = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m21 21-3.4999-3.5M20 11.5c0 4.6944-3.8056 8.5-8.5 8.5S3 16.1944 3 11.5 6.8056 3 11.5 3 20 6.8056 20 11.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SearchLg);
const Memo = memo(ForwardRef);
export default Memo;
