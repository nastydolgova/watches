import InputModel from "../../models/InputModel"

interface AppInputProps {
    input: InputModel
    onChange: (key: string, value: number | string) => void
}

export default function AppInput({input: {label, dataInput, type, name}, onChange}: AppInputProps) {
    return (
        <label>
            <span>{label}</span>
            <input value={dataInput} type={type} onChange={event => onChange(name, event.target.value)}/>
        </label>
        )
    }