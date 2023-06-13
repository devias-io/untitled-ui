import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowBlockUp = (
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
      d="M9.8 21c-.28 0-.42 0-.527-.0545a.4996.4996 0 0 1-.2185-.2185C9 20.62 9 20.48 9 20.2V10H5l7-7 7 7h-4v10.2c0 .28 0 .42-.0545.527a.4994.4994 0 0 1-.2185.2185C14.62 21 14.48 21 14.2 21H9.8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowBlockUp);
const Memo = memo(ForwardRef);
export default Memo;
