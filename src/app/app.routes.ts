import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"", loadComponent:()=>import("./Layout/dash-board/dash-board.component").then(m=>m.DashBoardComponent)
    },
    {
        path:"channel", loadComponent:()=>import("./Layout/channel-def/channel-def.component").then(m=>m.ChannelDefComponent)
    },
    {
        path:"port", loadComponent:()=>import("./Layout/port-def/port-def.component").then(m=>m.PortDefComponent)
    },
    {
        path:"device", loadComponent:()=>import("./Layout/device-def/device-def.component").then(m=>m.DeviceDefComponent)
    },
    {
        path:"devicetype", loadComponent:()=>import("./Layout/device-type-def/device-type-def.component").then(m=>m.DeviceTypeDefComponent)
    },
    {
        path:"operation", loadComponent:()=>import("./Layout/channel-operation/channel-operation.component").then(m=>m.ChannelOperationComponent)
    }
];
