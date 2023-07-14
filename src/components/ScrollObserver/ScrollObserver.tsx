import { forwardRef, HTMLAttributes } from 'react';

interface ScrollObserverProps extends HTMLAttributes<HTMLDivElement> {}

const ScrollObserver = forwardRef<HTMLDivElement, ScrollObserverProps>(
  (props, ref) => <div ref={ref} style={{ height: '1px' }} {...props} />
);

ScrollObserver.displayName = 'ScrollObserver';

export default ScrollObserver;
