import EquipmentCounter from "./EquipmentCounter.jsx";

function HeroMedia({ image, equipmentCount }) {
  return (
    <div className="relative">
      <img
        src={image}
        alt="Сцена с освещением на мероприятии"
        className="h-[380px] w-full rounded-2xl object-cover"
      />

      <EquipmentCounter count={equipmentCount} />
    </div>
  );
}

export default HeroMedia;