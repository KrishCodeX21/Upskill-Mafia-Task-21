/* eslint-disable react/prop-types */
const Container = ({ cards }) => {
  return (
    <div className="flex flex-wrap items-center justify-evenly w-full h-auto p-2.5">
      {cards.map((card) => (
        <div
          className="w-80 m-16 p-7 flex flex-col items-center gap-2 border-4 border-transparent  animate-border-corner"
          key={card.id}
        >
          <div className="image">
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              className="w-28 h-28"
            />
          </div>
          <div className="para text-purple-500 flex flex-col items-center ">
            <h3>Card {card.id}</h3>
            <p className="mt-4 mb-4">This is the card {card.id} description</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Container;
