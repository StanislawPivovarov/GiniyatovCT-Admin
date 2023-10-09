import { items } from "@/helpers/menu";
import { Button, Menu } from "antd";
import Image from "next/image";
import React, { useState } from "react";

import logo from '@/assets/images/logo.svg'
import styles from './SideMenu.module.scss'

const SideMenu = () => {
    return (
        <div className={styles.side_menu}>
            <Image 
                src={logo} 
                alt="logo"
                className={styles.logo}
                />
            <Menu
                className={styles.menu}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                items={items}
            />
        </div>
    )
}

export default SideMenu;
