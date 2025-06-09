import { animate, stagger } from "motion";
import { useEffect, useRef } from "react";

const splitText = (element, text) => {
  if (!element) return { words: [] };

  // Clear out any previous children
  element.innerHTML = "";

  const words = [];

  text.trim().split(/\s+/).forEach((word, index, arr) => {
    const span = document.createElement("span");
    span.textContent = word;
    span.className = "inline-block will-change-transform will-change-opacity";
    element.appendChild(span);
    words.push(span);

    if (index < arr.length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
  });

  return { words };
};

const SplitTextAnimation = ({
  as: Tag = "h1",
  text,
  className = "",
  containerClassName = "",
}) => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      const heading = headingRef.current;
      if (!heading) return;

      heading.style.visibility = "visible";
      const { words } = splitText(heading, text);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 1.5,
          bounce: 0,
          delay: stagger(0.03),
        }
      );
    });
  }, [text]); // Will run on remount since `key` forces new instance

  return (
    <div className={containerClassName} ref={containerRef}>
      <Tag
        ref={headingRef}
        className={className}
        style={{ visibility: "hidden" }}
      >
        {text}
      </Tag>
    </div>
  );
};

export default SplitTextAnimation;
