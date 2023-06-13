import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BankNote01 = (
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
      d="M6.6 10.3v3.6m10.8-5.4v3.6M16.5 4c2.2038 0 3.3958.3373 3.9889.5989.079.0348.1185.0523.2325.161.0683.0652.193.2565.2251.3454.0535.1482.0535.2292.0535.3912V15.17c0 .8179 0 1.2269-.1227 1.4371-.1247.2138-.245.3132-.4786.3954-.2295.0808-.6929-.0083-1.6197-.1864A12.1009 12.1009 0 0 0 16.5 16.6c-2.7 0-5.4 1.8-9 1.8-2.2038 0-3.3958-.3373-3.989-.5989-.0789-.0348-.1184-.0523-.2324-.161-.0683-.0652-.193-.2566-.225-.3454C3 17.1465 3 17.0655 3 16.9035V7.23c0-.818 0-1.2269.1227-1.437.1247-.2139.245-.3133.4785-.3955.2296-.0808.693.0083 1.6199.1864A12.0972 12.0972 0 0 0 7.5 5.8c2.7 0 5.4-1.8 9-1.8Zm-2.25 7.2c0 1.2426-1.0074 2.25-2.25 2.25s-2.25-1.0074-2.25-2.25S10.7574 8.95 12 8.95s2.25 1.0074 2.25 2.25Z"
    />
  </svg>
);
const ForwardRef = forwardRef(BankNote01);
const Memo = memo(ForwardRef);
export default Memo;
