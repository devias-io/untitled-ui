import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const LayerSingle = (
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
      d="M12.322 7.167c-.1181-.059-.1771-.0886-.239-.1002a.4502.4502 0 0 0-.166 0c-.0619.0116-.1209.0411-.239.1002L3 11.506l8.678 4.339c.1181.059.1771.0885.239.1001a.4498.4498 0 0 0 .166 0c.0619-.0116.1209-.0411.239-.1001L21 11.506l-8.678-4.339Z"
    />
  </svg>
);
const ForwardRef = forwardRef(LayerSingle);
const Memo = memo(ForwardRef);
export default Memo;
