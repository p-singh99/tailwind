import React from 'react';
import './checkBox.css';
import Variant from './variant';

interface Props {
	id: string;
	label: string;
	onclick: Function;
	variant?: Variant;
	gap?: string;
	width?: string;
	height?: string;
	textSize?: string;
	mx?: string;
	my?: string;
}

const checkBox = (props: Props) => {

	const gap = props.gap ? props.gap : 'space-x-2';
	const width = props.width ? props.width : 'w-4';
	const height = props.height ? props.height : 'h-4';
	const lSize = props.textSize ? props.textSize : 'text-base';
	const mx = props.mx ? props.mx : 'mx-5';
	const my = props.my ? props.my : 'my-5';
	const borderColour = props.variant === Variant.COLOUR ? 'border-blue-600' : 'border-white';

	return (
		<div className={`form-check flex ${gap} ${mx} ${my} items-center`}>
			<input 
				className={`
					form-check-input
					appearance-none
					bg-inherit 
					border-2 
					${borderColour}
					rounded-sm
					${width} 
					${height}
				`}
				type="checkbox"
				id={props.id}
				onClick={() => props.onclick()}
			/>
      {/* <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"  /> */}
			<label htmlFor={props.id} className={`${lSize} text-white`}>{props.label}</label>
		</div>
	);
};

export default checkBox;