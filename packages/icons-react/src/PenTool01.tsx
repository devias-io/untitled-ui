import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const PenTool01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m18 13-1.2996-6.4982c-.0726-.363-.1089-.5445-.1972-.6923a.9996.9996 0 0 0-.3124-.3249c-.1442-.094-.3241-.1375-.6839-.2243L2 2m0 0 3.2603 13.5069c.0868.3598.1303.5397.2243.6839a.9996.9996 0 0 0 .325.3124c.1477.0883.3292.1246.6922.1972L13 18M2 2l7.586 7.586m6.5454 11.2826 4.7372-4.7372c.396-.396.5941-.5941.6682-.8224a.9993.9993 0 0 0 0-.618c-.0741-.2283-.2722-.4264-.6682-.8224l-.7372-.7372c-.396-.396-.5941-.5941-.8224-.6682a.9993.9993 0 0 0-.618 0c-.2283.0741-.4264.2722-.8224.6682l-4.7372 4.7372c-.396.396-.5941.5941-.6682.8224a.9993.9993 0 0 0 0 .618c.0741.2283.2722.4264.6682.8224l.7372.7372c.396.396.5941.5941.8224.6682a.9993.9993 0 0 0 .618 0c.2283-.0741.4264-.2722.8224-.6682ZM13 11c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(PenTool01);
const Memo = memo(ForwardRef);
export default Memo;
