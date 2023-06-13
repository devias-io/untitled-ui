import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Briefcase02 = (
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
      d="M8.4 19.2V6.6c0-.837 0-1.2555.092-1.5988a2.7 2.7 0 0 1 1.9092-1.9092C10.7445 3 11.163 3 12 3s1.2555 0 1.5988.092a2.7 2.7 0 0 1 1.9092 1.9092c.092.3433.092.7618.092 1.5988v12.6m-9.72 0h12.24c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866C21 17.8321 21 17.3281 21 16.32V9.48c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 6.6 19.1281 6.6 18.12 6.6H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 7.9678 3 8.472 3 9.48v6.84c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Briefcase02);
const Memo = memo(ForwardRef);
export default Memo;
