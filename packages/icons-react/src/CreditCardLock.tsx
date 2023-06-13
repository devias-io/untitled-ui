import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CreditCardLock = (
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
      d="M19.425 16.25v-1.575c0-.8698-.7052-1.575-1.575-1.575-.8698 0-1.575.7052-1.575 1.575v1.575M21 9.5H3m18 .9V7.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 5 19.1281 5 18.12 5H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 6.3678 3 6.872 3 7.88v6.84c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962h5.22m5.04 2.25h3.42c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933C21 19.1661 21 18.914 21 18.41v-.72c0-.504 0-.7561-.0981-.9486a.9006.9006 0 0 0-.3933-.3933c-.1925-.0981-.4446-.0981-.9486-.0981h-3.42c-.504 0-.7561 0-.9486.0981a.9006.9006 0 0 0-.3933.3933c-.0981.1925-.0981.4446-.0981.9486v.72c0 .504 0 .7561.0981.9486a.9006.9006 0 0 0 .3933.3933c.1925.0981.4446.0981.9486.0981Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CreditCardLock);
const Memo = memo(ForwardRef);
export default Memo;
