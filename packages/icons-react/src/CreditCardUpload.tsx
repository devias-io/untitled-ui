import * as React from 'react';
import { SVGProps } from 'react';
const CreditCardUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.3 14.8 2.7-2.7m0 0 2.7 2.7M12 12.1v6.3m9-9.9H3m3.15 8.1h-.27c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C3 15.2321 3 14.7281 3 13.72V6.88c0-1.008 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C4.3678 4 4.872 4 5.88 4h12.24c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866C21 5.3678 21 5.872 21 6.88v6.84c0 1.0081 0 1.5121-.1962 1.8972a1.8 1.8 0 0 1-.7866.7866c-.3851.1962-.8891.1962-1.8972.1962h-.27"
    />
  </svg>
);
export default CreditCardUpload;
