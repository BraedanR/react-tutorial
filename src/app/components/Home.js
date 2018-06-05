import React from "react";

export class Home extends React.Component {
    render() {
        let content = ""
        if (true) {
            content = <p>Hello from if!</p>;
        }
        return(
            <div>
                <p>New component</p>
                {content}
                {"Hello from string"}
                {5 == 2 ? "Yes" : "No"}
            </div>
        );
    }
}
