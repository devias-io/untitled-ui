import * as React from 'react';
import { SVGProps } from 'react';
const Paint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.9996 13h16.9999m-8-9.5-1.5-1.5m1 1 8.8687 8.8686c.396.396.594.5941.6682.8224a1.0007 1.0007 0 0 1 0 .618c-.0742.2283-.2722.4264-.6682.8224l-5.4745 5.4745c-1.1881 1.188-1.7821 1.7821-2.4671 2.0046a2.9996 2.9996 0 0 1-1.8541 0c-.685-.2225-1.279-.8166-2.467-2.0046l-3.2118-3.2118c-1.188-1.188-1.7821-1.7821-2.0047-2.467a3.0002 3.0002 0 0 1 0-1.8542c.2226-.6849.8166-1.279 2.0047-2.467L11.4995 3Z"
    />
  </svg>
);
export default Paint;
