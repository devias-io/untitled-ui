import * as React from 'react';
import { SVGProps } from 'react';
const BookmarkCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 10.5 2 2L15.5 8M19 21V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C16.7202 3 15.8802 3 14.2 3H9.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C5 5.2798 5 6.1198 5 7.8V21l7-4 7 4Z"
    />
  </svg>
);
export default BookmarkCheck;
