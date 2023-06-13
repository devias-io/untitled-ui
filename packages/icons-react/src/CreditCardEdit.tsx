import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CreditCardEdit = (
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
      d="M3 9.5h18V7.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 5 19.1281 5 18.12 5H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 6.3678 3 6.872 3 7.88v6.84c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962h5.22m3.15 1.8 1.8225-.3645c.1589-.0318.2383-.0477.3124-.0767a.8989.8989 0 0 0 .1862-.0997c.0653-.0455.1226-.1028.2372-.2174L20.55 14.9c.4971-.4971.4971-1.3029 0-1.8-.4971-.4971-1.3029-.4971-1.8 0l-3.7417 3.7417c-.1146.1146-.1719.1719-.2174.2372a.8989.8989 0 0 0-.0997.1862c-.029.0741-.0449.1535-.0767.3124L14.25 19.4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CreditCardEdit);
const Memo = memo(ForwardRef);
export default Memo;
