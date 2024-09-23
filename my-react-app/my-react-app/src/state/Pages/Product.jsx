
import { Birthdaycake1,Birthdaycake2, ChocChipMuffin, JamTart, MixedBerryMuffin, Spongecake } from "../../assets" 
import ItemCard from "../../components/Itemcard";
function Productpg() {
  return (
    <div className="item-card">
      <ItemCard image={Birthdaycake1} cakename="Birthday cake1"
      />
      <ItemCard image={Birthdaycake2} cakename="Birthday cake2"/>
      <ItemCard image={ChocChipMuffin} cakename="Choc Chip Muffin"/>
      <ItemCard image={JamTart} cakename="Jam Tart"/>
      <ItemCard image={MixedBerryMuffin} cakename="Mixed Berry Muffin"/>
      <ItemCard image={Spongecake} cakename="Sponge cake"/>
    </div>
  );
};


export default Productpg;
