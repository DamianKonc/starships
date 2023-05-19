import corridorVideo from "../../../public/corridor.mp4";
import { StyledVideo } from "./styled";

export default function BackgroundVideoComponent() {
  return (
    <StyledVideo autoPlay muted loop>
      <source src={corridorVideo} type="video/mp4" />
    </StyledVideo>
  );
}

// `url(${stars.src})`
