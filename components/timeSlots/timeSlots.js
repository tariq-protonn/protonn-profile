import React from 'react';
import TimeSlot from '../timeSlot/timeSlot'
import styles from './timeSlots.module.scss';

function TimeSlots({ className }) {
    const slots = [
        "9:00 am",
        "10:00 am",
        "11:00 am",
        "12:00 pm",
        "1:00 pm",
        "2:00 pm",
        "3:00 pm",
        "4:00 pm",
        "5:00 pm",
        "6:00 pm",
        "7:00 pm",
    ];

    let classes = styles.timeSlots;
    if (className) classes += " " + className;
    return (
        <div className={classes}>
            {slots.map((slot, idx) => {
                return <TimeSlot key={idx} time={slot} />
            })}
        </div>
    )
}

export default TimeSlots;
