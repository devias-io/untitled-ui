import * as React from 'react';
import { SVGProps } from 'react';
const CreditCardSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21 20.3-1.35-1.35M21 9.5H3m18 1.8V7.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 5 19.1281 5 18.12 5H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 6.3678 3 6.872 3 7.88v6.84c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962h4.77m9.9-.9c0 1.7397-1.4103 3.15-3.15 3.15-1.7397 0-3.15-1.4103-3.15-3.15 0-1.7397 1.4103-3.15 3.15-3.15 1.7397 0 3.15 1.4103 3.15 3.15Z"
    />
  </svg>
);
export default CreditCardSearch;
