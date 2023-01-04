import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import AppLayoutComponent from "./Components/AppLayoutComponent.js";
import ErrorComponent  from "./Components/ErrorComponent.js";
import SearchTeamMembersComponent from "./Components/SearchTeamMembersComponent.js";
import TeamMemberComponent from "./Components/TeamMemberComponent.js";
import ProfileComponent from "./Components/ProfileComponent.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AboutUsComponent = lazy(()=>import("./Components/AboutUsComponent"));
const SearchTeamMembersComponent = lazy(()=>import("./Components/SearchTeamMembersComponent.js"))

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayoutComponent/>,
        errorElement : <ErrorComponent/>,
        children : [
            {
                path : "/searchteammembers",
                element : <Suspense fallback={<h1>loading...</h1>}><SearchTeamMembersComponent/></Suspense>
            },
            {
                path : "/teammember/:id",
                element : <TeamMemberComponent/>
            },
            {
                path : "/aboutus",
                element : <Suspense fallback={<h1>loading...</h1>}><AboutUsComponent/></Suspense>,
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