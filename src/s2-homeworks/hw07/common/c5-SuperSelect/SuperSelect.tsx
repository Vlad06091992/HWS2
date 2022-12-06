import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'
import {ArrType} from "../../HW7";

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    arr:ArrType
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
arr,
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}


) => {

    const mappedOptions: any[] = options
        ? options.map((o) => (
              <option

                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.value}

              >
                  {o.value}
              </option>
          ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChangeOption?.(e.target.value)
console.log(e.currentTarget.value)
        let currentObj = arr.find(el => el.value === e.currentTarget.value)

        console.log(currentObj)
        // console.log(value)

        onChangeOption?.(currentObj?.id)


        // делают студенты
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}

            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
