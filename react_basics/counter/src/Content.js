import React from 'react';
import { Paragraph } from './Paragraph'

export const Content = (props) => {
    return (
        <>
            <Paragraph textFromProps={props.textContent}/>
        </>
    )
}