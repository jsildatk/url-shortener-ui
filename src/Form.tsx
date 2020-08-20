import React from "react";
import axios from "axios";

export default class Form extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { url: '', name: '', resultMessage: '', resultLink: '' };
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUrlChange(event: React.FormEvent<HTMLInputElement>): void {
        event.preventDefault();
        this.setState({ url: event.currentTarget.value });
    }

    handleNameChange(event: React.FormEvent<HTMLInputElement>): void {
        event.preventDefault();
        this.setState({ name: event.currentTarget.value });
    }

    handleSubmit(event: { preventDefault: () => void; }): void {
        event.preventDefault();
        axios.post('http://localhost:8080/api', {
            'url': this.state.url,
            'name': this.state.name
        }).then(res => {
            this.setState({ resultMessage: res.data.message, resultLink: res.data.link });
        }).catch(reason => {
            this.setState({ resultMessage: reason.response.data, resultLink: '' });
        });
    }

    render() {
        return (
            <>
                <div className="form">
                    <form onSubmit={ this.handleSubmit }>
                        <div>
                            <label>
                                Url: <input className="input" id="url" type="text" onChange={ this.handleUrlChange }/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Name: <input className="input" id="name" type="text"
                                             onChange={ this.handleNameChange }/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input className="submit" id="submit" type="submit" value="Create"/>
                            </label>
                        </div>
                    </form>
                </div>
                <div id="result">
                    <div id="message">
                        { this.state.resultMessage }
                    </div>
                    <div id="link">
                        { this.state.resultLink }
                    </div>
                </div>
            </>
        );
    }
}
