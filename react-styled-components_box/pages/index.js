import BoxWithStyledComponents from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents></BoxWithStyledComponents>
    </div>
  );
}
