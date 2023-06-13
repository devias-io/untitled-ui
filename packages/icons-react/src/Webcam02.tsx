import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Webcam02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.55 21h7.2m4.05-10.35c0 4.225-3.425 7.65-7.65 7.65-4.225 0-7.65-3.425-7.65-7.65C3.5 6.425 6.925 3 11.15 3c4.225 0 7.65 3.425 7.65 7.65Zm-4.7812 0c0 1.5844-1.2844 2.8687-2.8688 2.8687-1.5844 0-2.8688-1.2843-2.8688-2.8687S9.5656 7.7812 11.15 7.7812c1.5844 0 2.8688 1.2844 2.8688 2.8688Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Webcam02);
const Memo = memo(ForwardRef);
export default Memo;
