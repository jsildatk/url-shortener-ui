import React from "react";
import Title from './Title';
import Form from "./Form";

export default class Main extends React.Component<any, any> {
    render() {
        return (
            <>
                <Title title="URL Shortener"/>
                <Form/>
            </>
        );
    }
}
