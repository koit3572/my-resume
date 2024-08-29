import { useEffect, useRef, useState } from "react";
import * as _ from "lodash";
interface Size {
  width: number;
  height: number;
}
function useComponentReSize(
  delay: number = 300
): [React.RefObject<HTMLElement>, Size] {
  const componentRef = useRef<HTMLElement>(null);
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const component = componentRef.current as HTMLElement;
    // setSize({
    //   width: component.offsetWidth,
    //   height: component.offsetHeight,
    // });
    const listener = _.throttle(() => {
      const resize = {
        width: component.offsetWidth,
        height: component.offsetHeight,
      };
      console.log(component.offsetWidth);
      setSize(resize);
    }, delay);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);
  return [componentRef, size];
}
export default useComponentReSize;
