import styled, { keyframes } from "styled-components";

// CSS adapted from Yoav Kadosh: https://dev.to/ykadosh/how-i-made-this-realistic-red-switch-pure-css-49g2

const color = "#ff1818";
const colourRGB = "255, 24, 24";
const rotation = "25deg";
const pivotDistance = "20px";
const width = 150;
const height = 1.3 * width;

const flicker = keyframes`
 0% {
    opacity: 1;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

const lightOff = keyframes`
0% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
`;

export const Button = styled.div`
  transition: all 0.3s cubic-bezier(1, 0, 1, 1);
  transform-origin: center center -${pivotDistance};
  transform: translateZ(${pivotDistance}) rotateX(-${rotation});
  transform-style: preserve-3d;
  background-color: #9b0621;
  width: ${width + "px"};
  height: ${height + "px"};
  position: relative;
  cursor: pointer;
  background: linear-gradient(
    rgba(${colourRGB}, 0.25) 0%,
    rgba(${colourRGB}, 0.33) 30%,
    rgba(${colourRGB}, 0.33) 70%,
    rgba(${colourRGB}, 0.25) 100%
  );
  background-repeat: no-repeat;

  &::before {
    content: "";
    background: linear-gradient(
          rgba(255, 255, 255, 0.8) 10%,
          rgba(255, 255, 255, 0.3) 30%,
          rgba(${colourRGB}, 0.35) 75%,
          rgba(${colourRGB}, 0.45)
        )
        50% 50% / 97% 97%,
      rgba(${colourRGB}, 20%);
    background-repeat: no-repeat;
    width: 100%;
    height: 50px;
    transform-origin: top;
    transform: rotateX(-90deg);
    position: absolute;
    top: 0;
  }

  &::after {
    content: "";
    background-image: linear-gradient(
      rgba(${colourRGB}, 0.35),
      rgba(${colourRGB}, 0.45)
    );
    width: 100%;
    height: 50px;
    transform-origin: top;
    transform: translateY(50px) rotateX(-90deg);
    position: absolute;
    bottom: 0;
    box-shadow: 0 50px 8px 0px black, 0 80px 20px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const Light = styled.div`
  opacity: 0;
  animation: ${lightOff} 1s;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
      // We use adjust-hue() here to make the center of the light a bit different in color
      // This is a nice tool for visualizing it https://sassme.jim-nielsen.com/
    radial-gradient(#ffc97e, ${color} 40%, transparent 70%);
`;

export const Dots = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    transparent 30%,
    rgba(${colourRGB}, 0.245) 70%
  );
  background-size: 10px 10px;
`;

export const Characters = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  // Drawing with gradients!
  // Read more about it here: https://css-tricks.com/drawing-images-with-css-gradients/
  // And check this collection out: https://a.singlediv.com/
  background: linear-gradient(white, white) 50% 20% / 5% 20%,
    // White vertical line
    radial-gradient(
        circle,
        transparent 50%,
        white 52%,
        white 70%,
        transparent 72%
      )
      50% 80% / 33% 25%; // White circle
  background-repeat: no-repeat;
`;

export const Shine = styled.div`
  transition: all 0.3s cubic-bezier(1, 0, 1, 1);
  opacity: 0.3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(white, transparent 3%) 50% 50% / 97% 97%,
    linear-gradient(
        rgba(255, 255, 255, 0.5),
        transparent 50%,
        transparent 80%,
        rgba(255, 255, 255, 0.5)
      )
      50% 50% / 97% 97%;
  background-repeat: no-repeat;
`;

export const Shadow = styled.div`
  transition: all 0.3s cubic-bezier(1, 0, 1, 1);
  opacity: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent 70%, rgba(0, 0, 0, 0.8));
  background-repeat: no-repeat;
`;

export const Panel = styled.label`
  display: flex;
  justify-content: space-evenly;

  background-color: black;
  width: fit-content;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2),
    // The surrounding shadow (first layer)
    0 0 1px 2px black,
    // The surrounding shadow (second layer)
    inset 0 2px 2px -2px white,
    // The top white "shine"
    inset 0 0 2px 15px #47434c,
    // The light gray frame
    inset 0 0 2px 22px black; // The internal black shadow
  border-radius: 5px;
  padding: 20px;
  perspective: 700px;

  input {
    display: none;

    &:checked + ${Button} {
      transform: translateZ(${pivotDistance}) rotateX(${rotation});
      box-shadow: 0 -10px 20px ${color};

      ${Light} {
        animation: ${flicker} 0.2s infinite 0.3s;
      }

      ${Shine} {
        opacity: 1;
      }

      ${Shadow} {
        opacity: 0;
      }
    }
  }
`;
