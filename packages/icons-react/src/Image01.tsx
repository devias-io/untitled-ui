import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Image01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16.2 21H6.9314c-.6059 0-.9088 0-1.049-.1198a.5.5 0 0 1-.1738-.4194c.0145-.1839.2287-.3981.657-.8265l8.503-8.5029c.396-.396.5941-.5941.8224-.6682a.9993.9993 0 0 1 .618 0c.2283.0741.4264.2722.8224.6682L21 15v1.2M16.2 21c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2M16.2 21H7.8c-1.6802 0-2.5202 0-3.162-.327a2.9997 2.9997 0 0 1-1.311-1.311C3 18.7202 3 17.8802 3 16.2V7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C5.2798 3 6.1198 3 7.8 3h8.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C21 5.2798 21 6.1198 21 7.8v8.4M10.5 8.5c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Image01);
const Memo = memo(ForwardRef);
export default Memo;
