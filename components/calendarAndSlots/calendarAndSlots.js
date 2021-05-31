import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimeSlots from '../timeSlots/timeSlots';
import styles from './calendarAndSlots.module.scss';

const CalendarAndSlots = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className={styles.calSlots}>
            <div>
                <Calendar
                    value={date}
                    onChange={setDate} />
            </div>
            <div>
                <div className={styles.date}>
                    {date.toDateString()}
                </div>
                <TimeSlots />
            </div>
        </div>
    )
}

export default CalendarAndSlots;