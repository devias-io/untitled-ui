import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const GraduationHat01 = (
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
      d="M5.7 9.356v5.41c0 .3231 0 .4846.0492.6272a.9002.9002 0 0 0 .2078.3363c.1056.1078.25.18.539.3245l4.86 2.43c.2361.118.3542.1771.478.2003a.8995.8995 0 0 0 .332 0c.1238-.0232.2419-.0823.478-.2003l4.86-2.43c.2889-.1445.4334-.2167.539-.3245a.9006.9006 0 0 0 .2078-.3363c.0492-.1426.0492-.3041.0492-.6272v-5.41M3 8.006l8.678-4.339c.1181-.059.1771-.0886.239-.1002a.4502.4502 0 0 1 .166 0c.0619.0116.1209.0411.239.1002L21 8.006l-8.678 4.339c-.1181.059-.1771.0885-.239.1001a.4498.4498 0 0 1-.166 0c-.0619-.0116-.1209-.0411-.239-.1001L3 8.006Z"
    />
  </svg>
);
const ForwardRef = forwardRef(GraduationHat01);
const Memo = memo(ForwardRef);
export default Memo;
