import React from 'react'
import burgerLogo from '../../assets/Images/burger-logo.png'
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.Logo}>
            <img alt="My Burger" src={burgerLogo} />
    </div>
)

export default logo