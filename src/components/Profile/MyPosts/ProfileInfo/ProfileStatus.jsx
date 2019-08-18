import React, {Component} from 'react';

class ProfileStatus extends Component { // создаем классовую компоненту с жизенными циклами
    state = {  // локальный стейт
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => { // синтаксис новый, только только приняли. Он не требует байндить контекст, просто вызываем метод.
        // this.state.editMode = true;
        // this.forceUpdate(); перерисует компоненту, но нужно его избегать.

        this.setState({// всё что указано тут, перезатрёт локальный стейт. !!Метод сделает это не сразу, а асинхронно!!
            editMode: true
        })
    };

    deactivateEditMode() {// старый синтаксис, что требует байнд.
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps) { // целиком приходят prevProps, prevState, snapshot. Берем то что нужно.
        if (prevProps.status !== this.props.status) { //обязательно вызывать с условием, потому что первым идет рендер, потом этот метод. И если нет проверок, то это приведет к зацикливанию.
            this.setState({
                status: this.props.status
            });
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}> {/* новый синтаксис */}
                        {this.props.status || "no status"}
                    </span>
                </div>
                }

                {this.state.editMode &&
                <div>
                    <input
                        autoFocus={true} // при клике на элемент, сразу активирует поле ввода
                        onBlur={this.deactivateEditMode.bind(this)} // старый синтаксис
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