import { useState, useEffect, useCallback, useRef, RefObject } from 'react';

const useInfiniteScroll = (target: RefObject<Element>) => {
  const [Intersecting, setIntersecting] = useState(false);
  const oberverRef = useRef<IntersectionObserver | null>(null);

  const getObserver = useCallback(() => {
    if (!oberverRef.current) {
      oberverRef.current = new IntersectionObserver((entries) =>
        setIntersecting(entries.some((entry) => entry.isIntersecting))
      );
    }
    return oberverRef.current;
  }, [oberverRef.current]);

  useEffect(() => {
    if (target.current) {
      getObserver().observe(target.current);
    }
    return () => {
      getObserver().disconnect();
    };
  }, [target.current]);

  return Intersecting;
};

export default useInfiniteScroll;
