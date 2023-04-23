import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    count:number
    setPage:(n:number)=>void
    setCount:(n:number)=>void
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        count,page, itemsCountForPage, totalCount, onChange, id = 'hw15',setPage,setCount
    }

) => {

    const lastPage = Math.ceil(totalCount/itemsCountForPage) // пишет студент // вычислить количество страниц
console.log(lastPage)
    const onChangeCallback = (event: ChangeEvent<unknown>, currentPage: number) => {
        // пишет студент
        setPage(currentPage)
        onChange(currentPage,count)
    }

    const onChangeSelect = (e:ChangeEvent<HTMLSelectElement>) => {
        setCount(+e.currentTarget.value)
        // пишет студент
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                    color:"primary"
                }}
                color={"primary"}
                shape={"rounded"}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                setCount={setCount}
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
