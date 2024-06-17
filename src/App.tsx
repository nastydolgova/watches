
import {useState} from "react";
import FormView from "./components/FormView/FormView";
import Times from "./components/Times/Times";
import TimeModel from "./models/TimeModel";

const initialState = {
    name: 'Город',
    timeZone: 0,
}

export default function App() {
    const [time, addTime] = useState(initialState);
    const [times, addTimes] = useState([] as TimeModel[]);

    const onChange = (name: string, value: string | number) => addTime((prevState: TimeModel) => ({...prevState, ...{ [name]:  value}}));

    const onAddTimes = () => {
        const isName = times.find(({name}) => name === time.name);
        if (isName) return;
        addTimes((prevState: TimeModel[]) => [...prevState, time]);
        addTime(initialState);
    }

    const deleteTime = (name: string) => addTimes([...times.filter((time: TimeModel) => time.name !== name)]);

    return (
        <div className="wrap">
            <div className="container">
                <FormView name={time.name} timeZone={time.timeZone} onChange={onChange} onAddTimes={onAddTimes} />
                <Times times={times} deleteTime={deleteTime} />
            </div>
        </div>
    );
}
