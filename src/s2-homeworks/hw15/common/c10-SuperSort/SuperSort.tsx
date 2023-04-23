import React from 'react'

import downIcon from '../../../../icons/iconDown.png'
import upIcon from '../../../../icons/iconUp.png'
import noneIcon from '../../../../icons/icons.png'
// добавить в проект иконки и импортировать


export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    if(sort === '') return down
    if(sort === down) return up
    if(sort === up) return ''

    return down

    // return up // исправить
}

// export const pureChange = (sort: string, down: string, up: string) => {
//     // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
//     return up // исправить
// }

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }


) => {



    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        debugger
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img style={{maxWidth:'14px',height:"auto"}}
                id={id + '-icon-' + sort}
                src={icon}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
