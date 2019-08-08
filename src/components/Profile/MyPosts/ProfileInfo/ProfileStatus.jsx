import React, {Component} from 'react';

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        // this.forceUpdate(); перерисует компоненту, но нужно его избегать.
        // this.state.editMode = true;

        this.setState({
            editMode: true  // всё что указано тут, перезатрёт локальный стейт. !!Метод сделает это не сразу, а асинхронно!!
        })
        // синтаксис новый, только только приняли. Он не требует байндить контекст, просто вызываем метод.
    };

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
        // старый синтаксис, что требует байнд.

        this.props.updateStatus(this.state.status)
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });

    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        autoFocus={true} //autoFocus={true} при клике на элемент, сразу активирует поле ввода
                        onBlur={this.deactivateEditMode.bind(this)}
                        value={this.state.status}
                        onChange={this.onStatusChange}
                    />
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;