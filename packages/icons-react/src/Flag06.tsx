import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Flag06 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 21V4m0 9h7.4c.5601 0 .8401 0 1.054-.109a.9998.9998 0 0 0 .437-.437C13 12.2401 13 11.9601 13 11.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C12.2401 3 11.9601 3 11.4 3H5.6c-.56 0-.84 0-1.054.109a1.0001 1.0001 0 0 0-.437.437C4 3.76 4 4.04 4 4.6V13Zm9-8h6.4c.5601 0 .8401 0 1.054.109a1 1 0 0 1 .437.437C21 5.76 21 6.04 21 6.6v6.8c0 .5601 0 .8401-.109 1.054a.9998.9998 0 0 1-.437.437C20.2401 15 19.9601 15 19.4 15h-4.8c-.5601 0-.8401 0-1.054-.109a.9998.9998 0 0 1-.437-.437C13 14.2401 13 13.9601 13 13.4V5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Flag06);
const Memo = memo(ForwardRef);
export default Memo;
