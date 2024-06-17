import Time from "./Time/Time";
import TimeModel from "../../models/TimeModel"

interface TimesProps {
    times: TimeModel[]
    deleteTime: (name: string) => void
}

export default function Times({times, deleteTime}: TimesProps) {
    const timesList = times.map((time: any, index: any) =>
        <Time
            key={`time-${index}`}
            time={time}
            deleteTime={deleteTime}
        />)
    return(
        <ul className="times-comp">{timesList}</ul>
    )
}