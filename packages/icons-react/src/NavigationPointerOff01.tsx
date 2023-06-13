import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const NavigationPointerOff01 = (
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
      d="m11.337 6.1612 8.9633-3.498c.5372-.2096.8058-.3144.9774-.257a.4999.4999 0 0 1 .3158.3158c.0574.1716-.0474.4402-.2571.9774l-3.509 8.9919m-1.4417 3.6944-1.6396 4.2014c-.2322.5951-.3484.8926-.5153.9793a.5.5 0 0 1-.4615-.0002c-.1668-.0869-.2826-.3846-.5141-.98l-2.6281-6.758c-.047-.1208-.0705-.1812-.1068-.2321a.4992.4992 0 0 0-.1167-.1167c-.0509-.0363-.1113-.0598-.2321-.1068l-6.758-2.6281c-.5954-.2315-.893-.3473-.98-.5141a.5.5 0 0 1-.0002-.4615c.0867-.167.3842-.283.9793-.5153l4.2049-1.641m13.382 13.3876-18-18"
    />
  </svg>
);
const ForwardRef = forwardRef(NavigationPointerOff01);
const Memo = memo(ForwardRef);
export default Memo;
