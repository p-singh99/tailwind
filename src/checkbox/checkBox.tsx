import { useEffect, useState } from 'react';
import './checkBox.css';
import Variant from './variant';

interface Props {
	id: string;
	label: string;
	onClick: (checked: boolean) => void;
	// variant?: Variant;
	gap?: string;
	width?: string;
	height?: string;
	textSize?: string;
	mx?: string;
	my?: string;
}

const CheckBox = (props: Props) => {

	const [checked, setChecked] = useState(false);
	const [colour, setColour] = useState('border-white');

	const gap = props.gap ? props.gap : 'space-x-2';
	const width = props.width ? props.width : 'w-4';
	const height = props.height ? props.height : 'h-4';
	const lSize = props.textSize ? props.textSize : 'text-base';
	const mx = props.mx ? props.mx : 'mx-5';
	const my = props.my ? props.my : 'my-5';
	// const borderColour = props.variant === Variant.COLOUR ? 'border-blue-600' : 'border-white';

	useEffect(() => {
		
		const tick = document.getElementById('checkbox-tick');

		if (checked) {
			setColour('border-blue-600')
			tick?.classList.remove('hidden');
		} else {
			setColour('border-white');
			tick?.classList.add('hidden');
		}

		props.onClick(checked);
	}, [checked]);

	return (
		<div className={`form-check flex ${gap} ${mx} ${my} items-center`}>
			<div className={`bg-inherit border-2 rounded-sm ${colour} flex flex-shrink-0 justify-start items-center ${width} ${height}`}>
				<input 
					className={`
						form-check-input
						absolute
						opacity-0
						${width}
						${height}
					`}
					type="checkbox"
					id={props.id}
					onChange={(event) => setChecked(event.currentTarget.checked)}
				/>
				<svg id='checkbox-tick' className={`fill-current hidden ${width} ${height} text-white pointer-events-none`} viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
			</div>
			<label htmlFor={props.id} className={`${lSize} text-white`}>{props.label}</label>
		</div>
	);
};

export default CheckBox;