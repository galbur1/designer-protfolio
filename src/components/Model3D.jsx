import React from "react";

// The viewer library is its own chunk; start fetching it as soon as this
// module loads so the model appears and spins right away.
import("@google/model-viewer");

// Slowly spinning 3D model.
const Model3D = ({ src, className = "" }) => {
  return (
    <model-viewer
      src={src}
      class={className}
      auto-rotate
      auto-rotate-delay="0"
      loading="eager"
      reveal="auto"
      rotation-per-second="35deg"
      camera-orbit="0deg 78deg auto"
      orientation="16deg 14deg 0deg"
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
    >
      <div slot="progress-bar" />
    </model-viewer>
  );
};

export default Model3D;
