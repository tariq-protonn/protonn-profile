import React from 'react';
import styles from './timeSlot.module.scss';

function TimeSlot({ className, time }) {
    let classes = styles.timeSlot;
    if (className) classes += " " + className;
    return (
        <div className={classes}>{time}</div>
    )
}

export default TimeSlot;
