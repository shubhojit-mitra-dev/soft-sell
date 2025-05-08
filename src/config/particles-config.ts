import type { ISourceOptions } from "@tsparticles/engine";

export const particlesConfig: ISourceOptions = {
  particles: {
    number: {
      value: 20
    },
    color: {
      value: "#808080"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.2
    },
    size: {
      value: 3
    },
    links: {
      enable: true,
      distance: 150,
      color: "#808080",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: {
        default: "out"
      },
      attract: {
        enable: true,
        rotate: {
          x: 600,
          y: 1200
        }
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.4
        }
      },
      push: {
        quantity: 3
      }
    }
  },
  background: {
    color: "transparent",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
  },
  fullScreen: {
    enable: false,
    zIndex: -1
  }
};