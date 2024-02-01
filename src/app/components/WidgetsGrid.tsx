'use client';
import React from 'react'
import { SimpleWidget } from '.'
import { IoMdCart } from 'react-icons/io'
import { useAppSelector } from '@/store'

export const WidgetsGrid = () => {

    const isCart = useAppSelector( state => state.counter.count );

  return (
    <div className="flex flex-wrap p-2 gap-10 justify-center">
        <SimpleWidget 
            title={ `${isCart}` }
            subtitle={'Shopping cart'}
            label={'Counter Shopping Cart'}
            href={'/dashboard/counter'}
            icon={ <IoMdCart size={70} className="text-blue-600" /> }
        />
    </div>
  )
}
