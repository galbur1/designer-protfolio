import React, { useEffect } from "react";

// Slowly spinning 3D model. The viewer library is loaded on demand so it
// doesn't weigh on the first page load.
const Model3D = ({ src, className = "" }) => {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    <model-viewer
      src={src}
      class={className}
      auto-rotate
      rotation-per-second="35deg"
      camera-orbit="0deg 78deg auto"
      interaction-prompt="none"
      disable-zoom
      shadow-intensity="0"
      exposure="1.1"
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
        pointerEvents: "none",
        "--poster-color": "transparent",
      }}
    />
  );
};

export default Model3D;
