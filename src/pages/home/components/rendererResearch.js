import { ResearchList } from "../data/dataResearch";
import "../components/rendererResearch.css";

//CARI: apa bedanya export default vs export biasa?
export function ResearchRenderer() {
  const researchRenderer = ResearchList.map((researchField) => (

    //jangan dikasih parent container, karena disetiap item bakalan punya kalau dikasih
    //bukan secara keseluruhan

    <li className="list-research-field-item" key={researchField.id}>
      <p>{researchField.field}</p>
    </li>
  ));

  //return dalam bentuk apaki
  // return <ul>{rendererResearchList}</ul>; 
  return researchRenderer;
}
