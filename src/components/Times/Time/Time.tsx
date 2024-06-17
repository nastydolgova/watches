import Clock from "./Clock/Clock";
import TimeModel from "../../../models/TimeModel"

interface TimeProps {
    time: TimeModel
    deleteTime: (name: string) => void
}

export default function Time({time, deleteTime}: TimeProps) {
    return (
        <li className="time-comp">
            <div className="name">{time.name}</div>
            <span className="material-icons icon" onClick={() => deleteTime(time.name)}>close</span>
            <Clock time={time} />
        </li>
    )
}