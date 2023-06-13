import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Announcement01 = (
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
      d="M22 8v3.9999m-11.75-6.5H6.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C2 7.7797 2 8.6198 2 10.3v1.2c0 .9319 0 1.3978.1522 1.7654.203.49.5924.8794 1.0824 1.0824C3.6022 14.5 4.0681 14.5 5 14.5v4.25c0 .2322 0 .3483.0096.446a2 2 0 0 0 1.7944 1.7944C6.9017 21 7.0178 21 7.25 21c.2322 0 .3483 0 .446-.0096a2 2 0 0 0 1.7944-1.7944c.0096-.0977.0096-.2138.0096-.446V14.5h.75c1.7664 0 3.9272.9469 5.5943 1.8557.9725.5301 1.4588.7952 1.7773.7562.2953-.0362.5186-.1688.6917-.4108.1867-.2609.1867-.7831.1867-1.8274V5.1262c0-1.0443 0-1.5664-.1867-1.8274-.1731-.242-.3964-.3746-.6917-.4108-.3185-.039-.8048.2261-1.7773.7563-1.6671.9087-3.8279 1.8556-5.5943 1.8556Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Announcement01);
const Memo = memo(ForwardRef);
export default Memo;
