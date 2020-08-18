import React from "react";

export default class Title extends React.Component<{ title: string }, any> {
    render() {
        return (
            <div className="title">
                { this.props.title }
            </div>
        );
    }
}
