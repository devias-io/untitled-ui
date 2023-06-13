import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Attachment01 = (
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
      d="m21.1525 10.8995-9.0156 9.0156c-2.0503 2.0502-5.3744 2.0502-7.4247 0-2.0502-2.0503-2.0502-5.3744 0-7.4247l9.0157-9.0156c1.3668-1.3668 3.5829-1.3668 4.9497 0 1.3668 1.3669 1.3668 3.583 0 4.9498l-8.662 8.662c-.6835.6835-1.7915.6835-2.475 0-.6833-.6834-.6833-1.7914 0-2.4748l7.6015-7.6014"
    />
  </svg>
);
const ForwardRef = forwardRef(Attachment01);
const Memo = memo(ForwardRef);
export default Memo;
