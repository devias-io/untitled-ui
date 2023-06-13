import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const LayersTwo01 = (
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
      d="m3 13.506 8.678 4.339c.1181.059.1771.0885.239.1001a.4498.4498 0 0 0 .166 0c.0619-.0116.1209-.0411.239-.1001L21 13.506m-18-4.5 8.678-4.339c.1181-.059.1771-.0886.239-.1002a.4502.4502 0 0 1 .166 0c.0619.0116.1209.0411.239.1002L21 9.006l-8.678 4.339c-.1181.059-.1771.0885-.239.1001a.4498.4498 0 0 1-.166 0c-.0619-.0116-.1209-.0411-.239-.1001L3 9.006Z"
    />
  </svg>
);
const ForwardRef = forwardRef(LayersTwo01);
const Memo = memo(ForwardRef);
export default Memo;
