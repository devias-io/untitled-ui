import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Image03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m5.0449 18.9551 5.9369-5.9369c.3564-.3564.5346-.5346.7401-.6014a.9004.9004 0 0 1 .5562 0c.2055.0668.3837.245.7401.6014l5.8973 5.8973M13.8 13.8l2.5818-2.5818c.3564-.3564.5346-.5346.7401-.6014a.9004.9004 0 0 1 .5562 0c.2055.0668.3837.245.7401.6014L21 13.8M10.2 8.4c0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8 0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8ZM7.32 19.2h9.36c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799C21 17.1482 21 16.3921 21 14.88V7.32c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C18.9482 3 18.1921 3 16.68 3H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 5.0517 3 5.8078 3 7.32v7.56c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Image03);
const Memo = memo(ForwardRef);
export default Memo;
