import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Backpack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20 13v4.8c0 1.1201 0 1.6802-.218 2.108a1.9996 1.9996 0 0 1-.874.874C18.4802 21 17.9201 21 16.8 21H7.2c-1.1201 0-1.6802 0-2.108-.218a1.9997 1.9997 0 0 1-.874-.874C4 19.4802 4 18.9201 4 17.8V13m5-3h6m-5.7143 4h5.4286c2.1324 0 3.1987 0 4.0212-.3961a3.9999 3.9999 0 0 0 1.8684-1.8684C21 10.913 21 9.8467 21 7.7143c0-1.5994 0-2.399-.2971-3.016a3.0001 3.0001 0 0 0-1.4012-1.4012C18.6847 3 17.8851 3 16.2857 3H7.7143c-1.5994 0-2.399 0-3.016.297a3 3 0 0 0-1.4012 1.4013C3 5.3153 3 6.115 3 7.7143c0 2.1324 0 3.1987.3961 4.0212a4 4 0 0 0 1.8684 1.8684C6.087 14 7.1533 14 9.2857 14Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Backpack);
const Memo = memo(ForwardRef);
export default Memo;
