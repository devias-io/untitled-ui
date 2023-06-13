import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ImageX = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m16.5 2.5 5 5m0-5-5 5m-4-4.5H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21H17c.93 0 1.395 0 1.7765-.1022a3.0002 3.0002 0 0 0 2.1213-2.1213C21 18.395 21 17.93 21 17M10.5 8.5c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2Zm4.49 3.4181L6.5312 19.608c-.4758.4326-.7137.6488-.7348.8362a.5.5 0 0 0 .1668.4313C6.1048 21 6.4262 21 7.0692 21h9.3868c1.4391 0 2.1587 0 2.7239-.2418a3 3 0 0 0 1.5783-1.5783C21 18.6147 21 17.8951 21 16.456c0-.4843 0-.7264-.0529-.9518a2.0014 2.0014 0 0 0-.3738-.7778c-.143-.1822-.3321-.3335-.7102-.6359l-2.7973-2.2378c-.3784-.3028-.5676-.4542-.776-.5076a.9998.9998 0 0 0-.5573.0176c-.2046.0664-.3839.2294-.7425.5554Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ImageX);
const Memo = memo(ForwardRef);
export default Memo;
