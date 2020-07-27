import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import './InfoBox.css';
import { prettyPrintStat } from './utils';

const InfoBox = ({title, cases, isRed, active, total, ...props}) => {
    return (
            <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'infoBox--red'}`}>
                <CardContent>
                    <Typography color="textSecondary">
                        {title}
                    </Typography>
                    <h2 className={`infoBox__cases ${!isRed && 'infoBox--cases--green'}`}>{`Today : ${prettyPrintStat(cases)}`}</h2>
                    <Typography className="infoBox__total" color="textSecondary">
                        {`Total : ${prettyPrintStat(total)}`}
                    </Typography>
                </CardContent>
            </Card>
    );
};

export default InfoBox;