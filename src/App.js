import React from 'react';
import './App.scss';
import MetaEditor from './components/meta-editor';
import Preview from './components/preview';
import ContentEditor from './components/content-editor/content-editor';
import text from './content-types/text';
import CodeDialog from "./components/code-dialog";

class App extends React.Component {
    constructor(props) {
        super(props);

        console.log(`
xd-dialog-helper WYSIWYG editor
===============================
\u00A9 2019 by Pablo Klaschka
Code hosted at https://github.com/pklaschka/xd-dialog-helper-editor`.trim());

        this.state = {
            meta: {},
            contents: [text()],
            showCodeDialogOpen: false
        }
    }

    render() {
        return (
            <div id="app" className="spectrum spectrum-Typography" aria-roledescription="Main app">
                <MetaEditor onShowDialog={() => this.setState({showCodeDialogOpen: true})}
                            onChange={(meta) => this.setState({meta})}/>
                <ContentEditor
                    onChange={contents => this.setState({contents})}
                    contents={this.state.contents}
                />
                <Preview meta={this.state.meta}
                         contents={this.state.contents}/>
                <CodeDialog
                    meta={this.state.meta}
                    contents={this.state.contents}
                    onClose={() => this.setState({showCodeDialogOpen: false})}
                    open={this.state.showCodeDialogOpen}
                />
            </div>
        );
    }
}

export default App;
