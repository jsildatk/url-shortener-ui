import React from "react";

export default class FormInput extends React.Component<any, any> {
    render() {
        return (
            <div>
                <label>
                    <input className="submit" id="submit" type="submit" value="Create"/>
                </label>
            </div>
        );
    }
}
