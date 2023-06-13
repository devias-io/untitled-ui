import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const GraduationHat02 = (
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
      d="M16.5 13.406v-2.705c0-.1616 0-.2423-.0246-.3137a.4496.4496 0 0 0-.1039-.1681c-.0528-.0539-.125-.09-.2695-.1622L12 8.006m-7.2.9v6.1259c0 .3347 0 .5021.0522.6486a.9003.9003 0 0 0 .22.3428c.1114.1085.2636.1782.5678.3177l5.76 2.64c.2207.1011.3311.1517.446.1717a.8999.8999 0 0 0 .308 0c.1149-.02.2253-.0706.446-.1717l5.76-2.64c.3043-.1395.4564-.2092.5679-.3177a.901.901 0 0 0 .2199-.3428c.0522-.1465.0522-.3139.0522-.6486v-6.126M3 8.006l8.678-4.339c.1181-.059.1771-.0885.239-.1001a.4502.4502 0 0 1 .166 0c.0619.0116.1209.0411.239.1002L21 8.006l-8.678 4.339c-.1181.059-.1771.0885-.239.1001a.4498.4498 0 0 1-.166 0c-.0619-.0116-.1209-.0411-.239-.1001L3 8.006Z"
    />
  </svg>
);
const ForwardRef = forwardRef(GraduationHat02);
const Memo = memo(ForwardRef);
export default Memo;
