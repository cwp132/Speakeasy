import React from 'react';

class drink extends React.Component {
    render(props) {
        return (
            <div>
                <h4>{this.props.title}</h4>
                <img src={this.props.img} alt={this.props.title} />
                <p></p>
                <h5>Instructions</h5>
                <p></p>
            </div>
        )
    }
}

export default drink