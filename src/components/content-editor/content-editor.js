import React from 'react';
import EditorWrapper from './element-editor-wrapper';
import ElementAdder from './element-adder';
import * as PropTypes from 'prop-types';

export default class ContentEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: this.props.contents
        }
    }

    handleChange = (index, newProps) => {
        const newContents = this.state.contents.slice();
        newContents[index].props = newProps;

        if (this.props.onChange)
            this.props.onChange(newContents);

        this.setState({ contents: newContents });
    };

    handleDelete = (index) => {
        const newContents = this.state.contents.slice();
        newContents.splice(index, 1);

        if (this.props.onChange)
            this.props.onChange(newContents);

        this.setState({ contents: newContents });
    };

    handleMoveUp = (index) => {
        const newContents = this.state.contents.slice();

        newContents.splice(index - 1, 0, newContents.splice(index, 1)[0]);

        if (this.props.onChange)
            this.props.onChange(newContents);

        this.setState({ contents: newContents });
    };

    handleMoveDown = (index) => {
        const newContents = this.state.contents.slice();

        newContents.splice(index + 1, 0, newContents.splice(index, 1)[0]);

        if (this.props.onChange)
            this.props.onChange(newContents);

        this.setState({ contents: newContents })
    };

    handleAdd = (element) => {
        const newContents = this.state.contents.slice().concat([element]);

        if (this.props.onChange)
            this.props.onChange(newContents);

        this.setState({ contents: newContents })
    };

    render() {
        return (
            <aside>
                {this.state.contents.map((content, index) =>
                    <EditorWrapper
                        element={content}
                        first={index === 0}
                        last={index === this.state.contents.length - 1}
                        key={content.uniqueId}
                        onDelete={() => this.handleDelete(index)}
                        onMoveUp={() => this.handleMoveUp(index)}
                        onMoveDown={() => this.handleMoveDown(index)}
                    >
                        <content.editor element={content} onChange={(newProps) => this.handleChange(index, newProps)} />
                    </EditorWrapper>
                )
                }
                <ElementAdder onAdd={this.handleAdd} />
            </aside>
        )
    }
}

ContentEditor.propTypes = {
    onChange: PropTypes.func.isRequired,
    contents: PropTypes.arrayOf(PropTypes.object).isRequired,
};
