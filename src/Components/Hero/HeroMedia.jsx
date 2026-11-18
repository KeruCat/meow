import EquipmentCounter from "./EquipmentCounter";

function HeroMedia({ image, equipmentCount }) {
  return (
    <div className="absolute inset-0">
      <img
        src={image}
        alt="Сцена с освещением на мероприятии"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-page via-page/80 to-page/40 lg:via-page/75 lg:to-page/10"></div>
      <EquipmentCounter count={equipmentCount} />
    </div>
  );
}

export default HeroMedia;