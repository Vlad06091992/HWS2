import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    setCount?:(x:number)=>void,
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    setCount,
    options,
    value,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {


    const mappedOptions: any[] = options
        ? options.map((o) => (
              <option
                  selected={o.value == value}
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.id}
              >
                  {o.value}
              </option>
          ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        if (setCount) {
            setCount(+e.target.value)
        }
        if (onChange) {
            onChange(e)
        }
        // делают студенты
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select style={{margin: '0px 10px'}}
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
