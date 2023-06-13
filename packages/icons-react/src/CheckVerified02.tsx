import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CheckVerified02 = (
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
      d="m8.3 12 1.8 1.8 4.05-4.05m2.1611-4.0513c.1853.4482.541.8045.9889.9905l1.5707.6506a1.8294 1.8294 0 0 1 .9901 2.3902l-.6502 1.5696a1.827 1.827 0 0 0 .0006 1.4009l.649 1.5691a1.8296 1.8296 0 0 1-.9903 2.391l-1.5696.6502a1.8295 1.8295 0 0 0-.9905.989l-.6505 1.5707a1.8294 1.8294 0 0 1-2.3902.9901l-1.5695-.6502a1.8294 1.8294 0 0 0-1.3997.0011l-1.5707.6497a1.8291 1.8291 0 0 1-2.3887-.9895l-.6507-1.5712a1.8294 1.8294 0 0 0-.989-.9905L3.13 16.6594a1.8294 1.8294 0 0 1-.9905-2.3891l.6501-1.5696a1.8294 1.8294 0 0 0-.001-1.3997l-.6492-1.5719a1.8294 1.8294 0 0 1 .9903-2.391l1.5696-.6502a1.8294 1.8294 0 0 0 .99-.9878L6.34 4.1292a1.8294 1.8294 0 0 1 2.3901-.99l1.5696.6501a1.829 1.829 0 0 0 1.3996-.001l1.5714-.6481a1.8291 1.8291 0 0 1 2.3898.9899l.6508 1.5712-.0002-.0027Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckVerified02);
const Memo = memo(ForwardRef);
export default Memo;
