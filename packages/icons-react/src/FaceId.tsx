import * as React from 'react';
import { SVGProps } from 'react';
const FaceId = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M7.5 8v1.5V8Zm9 0v1.5V8ZM11 12.6001c.8 0 1.5-.7 1.5-1.5V8m2.7002 7.2c-1.8 1.8-4.7 1.8-6.5 0h6.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 3h-.2c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8V8m5 13h-.2c-1.6802 0-2.5202 0-3.162-.327a2.9997 2.9997 0 0 1-1.311-1.311C3 18.7202 3 17.8802 3 16.2V16m18-8v-.2c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H16m5 13v.2c0 1.6802 0 2.5202-.327 3.162a2.9994 2.9994 0 0 1-1.311 1.311C18.7202 21 17.8802 21 16.2 21H16M7.5 8v1.5m9-1.5v1.5M11 12.6001c.8 0 1.5-.7 1.5-1.5V8m2.7002 7.2c-1.8 1.8-4.7 1.8-6.5 0"
    />
  </svg>
);
export default FaceId;
