import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const AlarmClockMinus = (
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
      d="M5.7 3 3 5.7m18 0L18.3 3M6.6 17.4l-1.8 1.8m12.6-1.8 1.8 1.8M9.3 12h5.4M12 19.2a7.2003 7.2003 0 0 0 7.2-7.2A7.2002 7.2002 0 0 0 6.9088 6.9088 7.2 7.2 0 0 0 12 19.2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(AlarmClockMinus);
const Memo = memo(ForwardRef);
export default Memo;
