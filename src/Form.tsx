import React from "react";
import FormInput from "./FormInput";
import FormSubmit from "./FormSubmit";

export default class Form extends React.Component<any, any> {
    render() {
        return (
            <>
                <div className="form">
                    <form>
                        <FormInput label="URL"/>
                        <FormInput label="Name"/>
                        <FormSubmit/>
                    </form>
                </div>
                <div id="result">
                    Shortener has been created! Your link: <div><a href="#">localhost:8080/asdf</a></div>
                </div>
            </>
        );
    }
}
