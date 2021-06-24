import React from "react";
import Button from '@material-ui/core/Button';

export default function MyButton(props) {
    return (
        <Button 
        variant="contained" 
        color="primary"
        size="medium"
        {...props}
        >
            {props.children}
        </Button>
    )
}