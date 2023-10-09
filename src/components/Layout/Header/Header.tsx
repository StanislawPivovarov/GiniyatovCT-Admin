"use client"

import { Button } from "antd";
import React, { useState } from "react";
import styles from './Header.module.scss'
import MobileMenu from "../MobileMenu";

const Header = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  
    return(
        <div className={styles.header}>
            <Button onClick={showDrawer}>Hello</Button>
            <MobileMenu onClose={onClose} open={open}/>
        </div>
    )
}

export default Header;
