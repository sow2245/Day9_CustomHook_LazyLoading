import HeadingComponent from "../Components/HeadingComponent.js";
import { Outlet } from "react-router-dom";

const AppLayoutComponent =()=>{
    return (
    <>
    <HeadingComponent/>
    <div className="body">
        <Outlet/>
    </div>
    </>
    );
};

export default AppLayoutComponent;