import React from "react";
import ReactDom from "react-dom/client";
import AppLayoutComponent from "./Components/AppLayoutComponent.js";
import ErrorComponent  from "./Components/ErrorComponent";
import SearchTeamMembersComponent from "./Components/SearchTeamMembersComponent";
import TeamMemberComponent from "./Components/TeamMemberComponent";
import AboutUsComponent from "./Components/AboutUsComponent";
import ProfileComponent from "./Components/ProfileComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayoutComponent/>,
        errorElement : <ErrorComponent/>,
        children : [
            {
                path : "/searchteammembers",
                element : <SearchTeamMembersComponent/>
            },
            {
                path : "/teammember/:id",
                element : <TeamMemberComponent/>
            },
            {
                path : "/aboutus",
                element : <AboutUsComponent/>,
                children : [
                    {
                        path : "profile",
                        element : <ProfileComponent name = {"Punuru Sowmya Reddy"}/>
                    }
                ]
            }
        ]
    }
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);