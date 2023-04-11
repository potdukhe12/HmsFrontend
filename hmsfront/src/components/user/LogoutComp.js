import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../reduxStore/slice";

export default function LogoutComp(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    localStorage.clear();
    dispatch(logout())
    navigate("/")

}
