import React, {Component} from 'react';

class ProfileStatus extends Component {
    state = {
        editMode: false
    };

    activateEditMode = () => {
        // this.forceUpdate(); перерисует компоненту, но нужно его избегать.
        // this.state.editMode = true;
        this.setState({
            editMode: true  // всё что указано тут, перезатрёт локальный стейт. !!Метод сделает это не сразу, а асинхронно!!
        })
    };

    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    {/*autoFocus={true} при клике на элемент, сразу активирует поле ввода*/}
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;