export default function CoffeeBeanDecor() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <img
        src="/images/single-coffee-bean.png"
        alt=""
        className="bean-item absolute top-10 left-[8%] w-10 h-10 object-contain opacity-50 rotate-12"
      />
      <img
        src="/images/single-coffee-bean.png"
        alt=""
        className="bean-item absolute top-32 right-[12%] w-14 h-14 object-contain opacity-50 -rotate-12"
      />
      <img
        src="/images/single-coffee-bean.png"
        alt=""
        className="bean-item absolute bottom-16 left-[20%] w-8 h-8 object-contain opacity-50 rotate-45"
      />
      <img
        src="/images/single-coffee-bean.png"
        alt=""
        className="bean-item absolute bottom-24 right-[25%] w-10 h-10 object-contain opacity-50 -rotate-6"
      />
    </div>
  );
}