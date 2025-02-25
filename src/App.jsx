import Container from "./Container";
import Image1 from "./assets/Image1.jpg";
import Image2 from "./assets/Image2.jpg";
import Image3 from "./assets/Image3.jpg";
import Image4 from "./assets/Image4.jpg";
import Image5 from "./assets/Image5.jpg";
import Image6 from "./assets/Image6.jpg";
import Image7 from "./assets/Image7.jpg";
import Image8 from "./assets/Image8.jpg";
import Image9 from "./assets/Image9.jpg";
import Image10 from "./assets/Image10.jpg";
import Image11 from "./assets/Image11.jpg";
import Image12 from "./assets/Image12.jpg";
const App = () => {
  const cards = [
    { id: 1, image: Image1 },
    { id: 2, image: Image2 },
    { id: 3, image: Image3 },
    { id: 4, image: Image4 },
    { id: 5, image: Image5 },
    { id: 6, image: Image6 },
    { id: 7, image: Image7 },
    { id: 8, image: Image8 },
    { id: 9, image: Image9 },
    { id: 10, image: Image10 },
    { id: 11, image: Image11 },
    { id: 12, image: Image12 },
  ];

  return (
    <div className="w-full h-auto bg-black p-6 ">
      <center>
        <h1 className="text-purple-500 text-3xl ">All Cards Are Here</h1>
        <Container cards={cards}></Container>
      </center>
    </div>
  );
};

export default App;
