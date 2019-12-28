import SkiDayList from "../ui/SkiDayList";
import { useParams } from "react-router-dom";

const sample = [
  {
    resort: "Stowe",
    date: "2017-1-28",
    powder: false,
    backcountry: false
  },
  {
    resort: "Tuckerman's Ravine",
    date: "2017-1-31",
    powder: false,
    backcountry: true
  },
  {
    resort: "Mad River Glen",
    date: "2017-2-12",
    powder: true,
    backcountry: false
  }
];

export default props => (
  <SkiDayList
    days={sample}
    filter={useParams().filter}
    onRemoveDay={date => console.log("remove day on", date)}
  />
);
