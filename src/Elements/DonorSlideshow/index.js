import React, { useState, useEffect } from "react";
import { useTransition, animated, config } from "react-spring";

function DonorSlideshow(props) {
  const [index, set] = useState(0);
  const transitions = useTransition(props.donors[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () =>
      void setInterval(
        () => set((state) => (state + 1) % props.donors.length),
        3000
      ),
    [props.donors.length]
  );

  console.log(transitions);

  return transitions.map(({ item, props, key }) => (
    <animated.img
      key={key}
      className="bg"
      src={item.src}
      alt={item.alt}
      style={{
        ...props
      }}
    />
  ));
}

export default DonorSlideshow;
