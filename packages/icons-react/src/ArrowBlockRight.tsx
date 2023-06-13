import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowBlockRight = (
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
      d="m21 12-7-7v4H3.8c-.28 0-.42 0-.527.0545a.5.5 0 0 0-.2185.2185C3 9.38 3 9.52 3 9.8v4.4c0 .28 0 .42.0545.527a.4996.4996 0 0 0 .2185.2185C3.38 15 3.52 15 3.8 15H14v4l7-7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowBlockRight);
const Memo = memo(ForwardRef);
export default Memo;
