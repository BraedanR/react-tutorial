import React from "react";

export class Home extends React.Component {
    render() {
        var text = "Something!";

        return(
            <div>
                <p>New component</p>
                <p>Your name is {this.props.name}, your age is {this.props.age}</p>
                <p> User Object => Name: {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <p>{text}</p>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
// Can't read property of undefined
// Home.PropTypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number,
//     user: React.PropTypes.object,
//     children: React.PropTypes.element.isRequired
// };
