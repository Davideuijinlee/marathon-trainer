import React, { Component } from "react";
import ContentEditable from "react-contenteditable";


class InlineCell extends Component {
    state = {
        html: ``,
        editable: true
    }

    render = () => {
        const {text} = this.props;

        return (
            <ContentEditable
            // className="editable"
            tagName="td"
            html={this.state.html} // innerHTML of the editable div
            disabled={!this.state.editable} // use true to disable edition
            onChange={this.handleChange} // handle innerHTML change
            onBlur={this.sanitize}
          />
        )
    }
}

export default InlineCell;