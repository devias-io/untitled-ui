import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CloudSnowing01 = (
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
      d="M19.2 13.918c1.0854-.7265 1.8-1.9638 1.8-3.368 0-2.1092-1.6124-3.8418-3.6718-4.0326C16.907 3.955 14.6818 2 12 2S7.093 3.955 6.6718 6.5174C4.6124 6.7082 3 8.4408 3 10.55c0 1.4042.7146 2.6415 1.8 3.368m3.6-.218h.009M8.4 17.3h.009M12 15.5h.009M12 19.1h.009m3.591-5.4h.009m-.009 3.6h.009"
    />
  </svg>
);
const ForwardRef = forwardRef(CloudSnowing01);
const Memo = memo(ForwardRef);
export default Memo;
