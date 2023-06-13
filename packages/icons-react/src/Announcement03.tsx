import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Announcement03 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M17.85 14.7c1.7397 0 3.15-2.6191 3.15-5.85C21 5.6191 19.5897 3 17.85 3m0 11.7c-1.7397 0-3.15-2.6191-3.15-5.85C14.7 5.6191 16.1103 3 17.85 3m0 11.7L6.0992 12.5635c-.8347-.1518-1.2521-.2277-1.5896-.3934a2.7 2.7 0 0 1-1.4069-1.6858C3 10.1226 3 9.6984 3 8.85s0-1.2726.1027-1.6343a2.7 2.7 0 0 1 1.4069-1.6858c.3375-.1657.7549-.2416 1.5896-.3934L17.85 3M5.7 12.9l.3545 4.9626c.0336.4713.0505.7069.153.8855a.9006.9006 0 0 0 .3892.3624c.1854.0895.4216.0895.8941.0895H9.095c.5401 0 .8102 0 1.0101-.1077a.9003.9003 0 0 0 .3957-.4274c.0921-.2075.0714-.4768.0299-1.0153L10.2 13.35"
    />
  </svg>
);
const ForwardRef = forwardRef(Announcement03);
const Memo = memo(ForwardRef);
export default Memo;
