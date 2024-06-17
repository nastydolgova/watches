import AppInput from "../AppInput/AppInput";

interface FormViewProps {
    name: string
    timeZone: number
    onChange: (name: string, value: string | number) => void
    onAddTimes: () => void

}

export default function FormView({name, timeZone, onChange, onAddTimes}: FormViewProps) {
    const inputs = [
        {
            label: 'Название',
            name: 'name',
            dataInput: name,
            type: 'text',
        },
        {
            label: 'Временная зона',
            name: 'timeZone',
            dataInput: timeZone,
            type: 'number',
        }
    ]

    return (
        <fieldset>
            <legend>Мировые часы</legend>
            <div className="form-view">
                {inputs.map(input => <AppInput key={input.name} input={input} onChange={onChange}/>)}
                <div role="button" className="button" onClick={onAddTimes}>Добавить</div>
            </div>
        </fieldset>
    )
}