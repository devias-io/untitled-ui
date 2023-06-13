import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const AlignHorizontalCentre01 = (
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
      d="M12 3v16.2m9-8.1h-5.85m0 0 3.6 3.6m-3.6-3.6 3.6-3.6M3 11.1h5.85m0 0-3.6 3.6m3.6-3.6-3.6-3.6"
    />
  </svg>
);
const ForwardRef = forwardRef(AlignHorizontalCentre01);
const Memo = memo(ForwardRef);
export default Memo;
