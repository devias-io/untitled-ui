import * as React from 'react';
import { SVGProps } from 'react';
const HeartSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C5.2798 3 6.1198 3 7.8 3h8.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C21 5.2798 21 6.1198 21 7.8v8.4c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C18.7202 21 17.8802 21 16.2 21H7.8c-1.6802 0-2.5202 0-3.162-.327a2.9997 2.9997 0 0 1-1.311-1.311C3 18.7202 3 17.8802 3 16.2V7.8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.9966 9.068c-.9997-1.1688-2.6667-1.4832-3.9193-.413-1.2525 1.0702-1.4288 2.8595-.4452 4.1252.63.8107 2.2435 2.314 3.3221 3.2902.3585.3243.5377.4865.7524.5516a1.024 1.024 0 0 0 .58 0c.2146-.0651.3939-.2273.7523-.5516 1.0787-.9762 2.6921-2.4795 3.3222-3.2902.9836-1.2657.8288-3.0663-.4453-4.1252-1.2741-1.059-2.9195-.7558-3.9192.413Z"
      clipRule="evenodd"
    />
  </svg>
);
export default HeartSquare;
