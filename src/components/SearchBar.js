import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {
	const [term, setTerm] = useState('');

	const onFormSubmit = event => {
		event.preventDefault();
		onSubmit(term);
	};

	const onInputChange = ({ target }) => {
		setTerm(target.value);
	};

	return (
		<div className="search-bar ui segment">
			<form className="ui form" onSubmit={onFormSubmit}>
				<div className="field">
					<label htmlFor="search-input">Search</label>
					<input
						onChange={onInputChange}
						onBlur={onFormSubmit}
						value={term}
						type="text"
						id="search-input"
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
