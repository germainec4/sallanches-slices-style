const items = [
  "Pizza Napolitaine",
  "✦",
  "Feu de Bois",
  "✦",
  "Fait Maison",
  "✦",
  "Mozzarella di Bufala",
  "✦",
  "Sallanches",
  "✦",
  "Dolce Vita",
  "✦",
];

const Marquee = () => {
  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-lg md:text-xl text-primary-foreground mx-4 italic"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
