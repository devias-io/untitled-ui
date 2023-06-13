import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Gift02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 6.5H7.95a2.25 2.25 0 1 1 0-4.5C11.1 2 12 6.5 12 6.5Zm0 0h4.05a2.2501 2.2501 0 0 0 1.591-3.841A2.2501 2.2501 0 0 0 16.05 2C12.9 2 12 6.5 12 6.5Zm0 0V20m-9-7.2h18M3 9.38v7.74c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866C4.3678 20 4.872 20 5.88 20h12.24c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866C21 18.6321 21 18.1281 21 17.12V9.38c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 6.5 19.1281 6.5 18.12 6.5H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 7.8678 3 8.372 3 9.38Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Gift02);
const Memo = memo(ForwardRef);
export default Memo;
