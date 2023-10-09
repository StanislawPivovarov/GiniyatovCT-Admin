import { Drawer } from "antd";
import React from "react";
import SideMenu from "../SideMenu";

const MobileMenu = (props:any) => {
    return(
        <Drawer width={'100%'} placement='left' onClose={props.onClose} open={props.open}>
            <SideMenu/>
        </Drawer>
    )
}

export default MobileMenu;