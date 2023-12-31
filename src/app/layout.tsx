"use client"
import './globals.scss'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Col, Menu, MenuProps, Row } from 'antd'
import { useState } from 'react'
import SideMenu from '@/components/Layout/SideMenu'
import { useMediaQuery } from 'react-responsive'
import Header from '@/components/Layout/Header/Header'
import styles from '../styles/Layout.module.scss'
const inter = Montserrat({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  })
  if (isMobile) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <Header/>
          <div className={styles.child_wrapper}>
            {children}
          </div>
        </body>
      </html>
    )
  } else {

    return (

      <html lang="en">
        <body className={inter.className}>
          <Row justify={'space-between'}>
            <Col xxl={4} xl={4} lg={4} md={5}>
              <SideMenu />
            </Col>
            <Col xxl={20} xl={20} lg={20} md={19}>
              <Row>
                <Col span={24}>
                <Header/>
                </Col>
              </Row>
                <div className={styles.child_wrapper}>
                  {children}
                </div>
            </Col>
          </Row>
        </body>
      </html>
    )
  }
}
