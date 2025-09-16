import Beneficios from "@/components/Beneficios";
import Destinos from "@/components/Destinos";
//import Footer from "@/components/Footer";
// import Formulario from "@/components/Formulario";
//import Menu from "@/components/Menu";
import Slider from "@/components/Slider";
import Giras from "@/components/Giras";

export default function Home() {
  return (
    <div>
      <Slider />
      <Giras />
      <Beneficios />
      <Destinos />
      {/* <Formulario /> */}
    </div>
  );
}
