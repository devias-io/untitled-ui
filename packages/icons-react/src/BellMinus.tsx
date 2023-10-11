import * as React from 'react';
import { SVGProps } from 'react';
const BellMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
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
      d="M8.7449 20.1c.6346.5601 1.4682.9 2.3812.9.913 0 1.7466-.3399 2.3813-.9m.3187-14.4h5.4m-7.2-2.6245a5.3999 5.3999 0 0 0-4.7184 1.5061A5.4 5.4 0 0 0 5.7261 8.4c0 2.7812-.7016 4.6854-1.4853 5.9449-.661 1.0624-.9916 1.5936-.9795 1.7418.0134.1641.0482.2266.1804.3247.1194.0886.6578.0886 1.7344.0886h11.9c1.0767 0 1.6151 0 1.7345-.0886.1322-.0981.167-.1606.1804-.3247.0121-.1482-.3184-.6793-.9794-1.7416-.6962-1.1187-1.3276-2.7462-1.4601-5.0451"
    />
  </svg>
);
export default BellMinus;
