import React from "react";

export default class FormInput extends React.Component<{ label: string }, any> {
    render() {
        return (
            <div>
                <label>
                    { this.props.label }: { ' ' }
                    <input className="input" id={ this.props.label.toLowerCase() } type="text"/>
                </label>
            </div>
        );
    }
}
