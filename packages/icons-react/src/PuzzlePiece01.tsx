import * as React from 'react';
import { SVGProps } from 'react';
const PuzzlePiece01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
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
      d="M7.95 4.25C7.95 3.0074 8.9574 2 10.2 2s2.25 1.0074 2.25 2.25V5.6h.9c1.258 0 1.8871 0 2.3832.2055a2.7003 2.7003 0 0 1 1.4613 1.4612C17.4 7.763 17.4 8.392 17.4 9.65h1.35c1.2426 0 2.25 1.0074 2.25 2.25s-1.0074 2.25-2.25 2.25H17.4v1.53c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799C15.3482 20 14.5921 20 13.08 20h-.63v-1.575c0-1.1184-.9066-2.025-2.025-2.025-1.1184 0-2.025.9066-2.025 2.025V20H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3 17.9482 3 17.1921 3 15.68v-1.53h1.35c1.2426 0 2.25-1.0074 2.25-2.25S5.5926 9.65 4.35 9.65H3c0-1.258 0-1.887.2055-2.3833a2.7 2.7 0 0 1 1.4613-1.4612C5.1629 5.6 5.792 5.6 7.05 5.6h.9V4.25Z"
    />
  </svg>
);
export default PuzzlePiece01;
