import HeadingComponent from "../Components/HeadingComponent";
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