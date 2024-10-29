import { useState, useMemo, useCallback, memo, useEffect } from "react";

export function Calendar() {
    return (<div>
        <h1>Календарь</h1>
        <Demo />
    </div>)
}

const Demo = (() => {
    const
        [value, setValue] = useState(DateToYYYYMM(new Date));
    console.debug('Demo');
    //const dateOpt = useCallback(() => YYYYMMToDate(value), [value]);
    const dateOpt = YYYYMMToDate(value);

    return <div>
        <input type='month' value={value} onChange={event => setValue(event.target.value)} />
        <GetCalendar date={dateOpt} />
    </div>
});

function DateToYYYYMM(date) {
    console.debug('Date to Year');
    return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0');
}

function YYYYMMToDate(str){
    const [year, month] = str.split('-');
    console.debug('Year to Date');
    return new Date(year, month - 1, 1);
};



function GetCalendar({ date }) {
    const
        caption = date.toLocaleDateString('ru', { month: 'long', year: 'numeric' }),
        year = date.getFullYear(),
        month = date.getMonth(),
        weekDayName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        max = (new Date(year, month + 1, 0)).getDate(),
        daysInMonth = new Date(year, month + 1, 0).getDate(), // вс=0, пн=1, вт=2.....сб=6
        shift = (-1 + daysInMonth + 7) % 7,                   //  пн=0, вт=1,.....сб=5, вс=6

        dayNames = useMemo(() =>
            Array.from({ length: 7 }, (_, index) =>
                <td key={index}>
                    {weekDayName[index]}
                </td>), []);

    console.debug('calendar', month, year, max, shift);
    return <table>
        <caption>{caption}</caption>
        <thead><tr>{dayNames}</tr></thead>
        <Month shift={shift} max={max}/>
    </table>

};

const Month = memo(function Month({ shift, max }) {
    const
        arr = [];
    for (let start = 1 - shift; start <= max; start += 7) {
        arr.push(<Week key={start} start={start} max={max} />)
    }
    console.debug('month');
    return <tbody>{arr}</tbody>;
});

const Week = memo(function Week({ start, max }) {
    const
        arr = [];
    for (let day = start; day < start + 7; day++)
        arr.push(<td key={day}>
            {day >= 1 && day <= max && day}
        </td>);
    console.debug('week');
    return <tr>{arr}</tr>
});