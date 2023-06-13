import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ShoppingCart01 = (
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
      d="M2 3h1.1755c.2215 0 .3322 0 .4213.0407a.4499.4499 0 0 1 .1916.1662c.053.0825.0686.192.1.4113L4.3142 6.6m0 0 .9467 6.9583c.1201.883.1802 1.3245.3913 1.6568.186.2929.4527.5257.768.6705.3577.1644.8033.1644 1.6944.1644h7.7021c.8483 0 1.2724 0 1.6191-.1526a1.7993 1.7993 0 0 0 .7571-.6266c.2148-.3119.2942-.7286.4529-1.5619l1.1913-6.2542c.0559-.2933.0838-.44.0433-.5545a.45.45 0 0 0-.1977-.239c-.105-.0612-.2543-.0612-.5529-.0612H4.3143ZM9.2 20.1a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9Zm7.2 0a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingCart01);
const Memo = memo(ForwardRef);
export default Memo;
