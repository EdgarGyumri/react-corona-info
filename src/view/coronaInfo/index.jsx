import { Outlet } from "react-router-dom";
import Countries from "../../components/countries";
import './style.css'

export default function CoronaInfo() {
  return (
    <div className="container">
      <div>
        <Countries />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}