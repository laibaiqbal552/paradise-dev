import { useEffect, useRef } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClick(onOutsideClick) {
  const ref = useRef();
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onOutsideClick]);

  return ref;
}

export default useOutsideClick;

// usage example with multiple instances

const ref1 = useOutsideClick(() => {
  console.log("clicked outside of ref1");
});
const ref2 = useOutsideClick(() => {
  console.log("clicked outside of ref2");
});
