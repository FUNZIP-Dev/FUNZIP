import React from 'react'
import * as S from "./style";
import { Outlet } from 'react-router-dom'

export default function Coupon() {
  return (
    <div>
        <Outlet />
        Coupon</div>
  )
}
