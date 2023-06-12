import * as React from 'react';
import { SVGProps } from 'react';
const HomeLine = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 17h8M11.0177 2.764 4.2354 8.0391c-.4534.3527-.68.529-.8434.7498a1.9998 1.9998 0 0 0-.318.6502C3 9.7035 3 9.9907 3 10.565V17.8c0 1.1201 0 1.6801.218 2.108.1917.3763.4977.6823.874.874C4.5198 21 5.08 21 6.2 21h11.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C21 19.4801 21 18.9201 21 17.8v-7.2349c0-.5744 0-.8616-.074-1.126a2.0016 2.0016 0 0 0-.318-.6502c-.1633-.2208-.39-.3971-.8434-.7498L12.9823 2.764c-.3513-.2732-.527-.4099-.721-.4624a.9996.9996 0 0 0-.5226 0c-.194.0525-.3697.1891-.721.4624Z"
    />
  </svg>
);
export default HomeLine;
