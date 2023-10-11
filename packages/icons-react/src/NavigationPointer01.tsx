import * as React from 'react';
import { SVGProps } from 'react';
const NavigationPointer01 = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.4135 10.7445c-.5954-.2315-.893-.3473-.98-.5141a.5.5 0 0 1-.0002-.4615c.0867-.167.3842-.283.9793-.5153l16.8877-6.5903c.5372-.2097.8058-.3145.9774-.2571a.4999.4999 0 0 1 .3158.3158c.0574.1716-.0474.4402-.2571.9774L14.7461 20.587c-.2322.5951-.3484.8926-.5153.9793a.5.5 0 0 1-.4615-.0002c-.1668-.0869-.2826-.3846-.5141-.98l-2.6281-6.758c-.047-.1208-.0705-.1812-.1068-.2321a.4992.4992 0 0 0-.1167-.1167c-.0509-.0363-.1113-.0598-.2321-.1068l-6.758-2.6281Z"
    />
  </svg>
);
export default NavigationPointer01;
