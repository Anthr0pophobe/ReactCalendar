import React, { useState, useEffect } from 'react';

const date = new Date();
const mois = [
	'janvier',
	'fevrier',
	'mars',
	'avril',
	'mai',
	'juin',
	'juillet',
	'août',
	'septembre',
	'octobre',
	'novembre',
	'decembre',
];

export default function Home() {
	function getDaysInMonth(month, year) {
		var date = new Date(year, month, 1);
		var days = [];
		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	}

	let [month, setMonth] = useState(date.getMonth());
	let [year, setYear] = useState(date.getFullYear());
	let [test, setTest] = useState(
		getDaysInMonth(month, year)
	);

	const changeDate = () => {
		if (month <= 10) {
			setMonth(month + 1);
		} else {
			setMonth(0);
			setYear(year + 1);
		}
	};

	useEffect(() => {
		console.log('render');
		setTest(getDaysInMonth(month, year));
	}, [month, year]);

	return (
		<>
			<h1 className='text-3xl font-bold underline'>
				Calendrier
			</h1>
			<div className='grid grid-cols-3 grid-flow-row gap-4 h-16'>
				{/* header du calendrier */}
				<p
					onClick={() =>
						month >> 0 ? setMonth(month - 1) : setMonth(11)
					}
				>
					mois précédent
				</p>
				<p className='w-16'>
					{mois[month]}, {year}
				</p>
				<p className='w-16 ' onClick={() => changeDate()}>
					mois suivant
				</p>
			</div>
			<div className='grid grid-cols-7 text-2xl'>
				{test.map((day) => (
					<p
						className='border-solid border-2'
						style={{
							gridColumnStart: day.getDay() + 1,
							height: '150px',
						}}
						key={day.getDate()}
					>
						{day.getDate()}
					</p>
				))}
			</div>
		</>
	);
}
