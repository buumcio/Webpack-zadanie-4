import React from 'react';
import style from './TodoForm.css';
class TodoForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			inputValue: ''
		}
	}

	inputChange(e) {
		this.setState({inputValue: e.target.value});
	}

	onClickHandler(event) {
		this.props.add(this.state.inputValue);
		this.setState({inputValue: ''});
	}

	render() {
		return (
			<div className={style.TodoForm} >
				<form>
					<input value={this.state.inputValue} onChange={(e) => this.inputChange(e)} />
					<button type="button" onClick={(event) => this.onClickHandler(event)}>Add</button>
				</form>
			</div>
		);

	}
}

export default TodoForm;
