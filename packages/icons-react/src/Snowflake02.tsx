import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Snowflake02 = (
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
      d="M12 7.4v7.2m0-7.2V2m0 5.4L7.5 2.9M12 7.4l4.5-4.5M12 14.6V20m0-5.4-4.5 4.5m4.5-4.5 4.5 4.5m-.9-8.1H8.4m7.2 0H21m-5.4 0 4.5-4.5M15.6 11l4.5 4.5M8.4 11H3m5.4 0L3.9 6.5M8.4 11l-4.5 4.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Snowflake02);
const Memo = memo(ForwardRef);
export default Memo;
