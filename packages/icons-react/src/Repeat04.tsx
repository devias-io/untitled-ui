import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Repeat04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 20.5001c4.6944 0 8.5-3.8056 8.5-8.5 0-2.8255-1.3787-5.329-3.5-6.8746m-4 17.2746-2-2 2-2m-1-14.9c-4.6944 0-8.5 3.8056-8.5 8.5 0 2.8255 1.3787 5.3291 3.5 6.8746m4-13.2746 2-2-2-2"
    />
  </svg>
);
const ForwardRef = forwardRef(Repeat04);
const Memo = memo(ForwardRef);
export default Memo;
