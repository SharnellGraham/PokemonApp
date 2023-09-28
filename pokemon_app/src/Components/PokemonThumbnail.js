import React, { useState } from 'react'
import Description from './Description'

const PokemonThumbnail = ({id,name,image,type,height,weight,stat1,stat2,stat3,stat4,stat5,stat6,bs1,bs2,bs3,
    bs4,bs5,bs6}) => {
    const style = `thumb-container ${type}`
    const [show,setShow] = useState(false)