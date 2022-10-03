import React, { useState, useEffect, useContext } from 'react'
import {
  Navbar,
  Text,
  Avatar,
  Dropdown,
  useTheme,
  Grid,
  Button
} from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { Context } from '../../context'

function NavBar () {
  const { mySession, viewTablet } = useContext(Context)
  const { isDark } = useTheme()
  const collapseItems = ['Challenges', 'Problems', 'Super BioBac', 'Mision']
  return (
    <>
      <Navbar isBordered={isDark} variant='sticky'>
        <Navbar.Toggle showIn='xs' />
        <Navbar.Brand
          css={{
            '@xs': {
              w: '12%'
            }
          }}
        >
          <Image
            src='/img/Logo-NASA.png'
            alt='Logotipo BioSpace'
            width={50}
            height={50}
            objectFit='contain'
          />
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor='primary'
          hideIn='xs'
          variant='highlight'
        >
          <Navbar.Link href='#challenge'>Challenge</Navbar.Link>
          <Navbar.Link href='#problems'>Problems</Navbar.Link>
          <Navbar.Link href='#super_biobac'>Super BioBac</Navbar.Link>
          {/* <Navbar.Link href='#cuatro'>Company</Navbar.Link> */}
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor='primary'
              css={{
                color: index === collapseItems.length - 1 ? '$error' : ''
              }}
            >
              <Link
                color='inherit'
                css={{
                  minWidth: '100%'
                }}
                href='#'
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export { NavBar }
