import React, { Component } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import cpp from 'highlight.js/lib/languages/cpp';
import 'highlight.js/styles/atom-one-dark.css';

// hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('cpp', cpp);

interface IHighlightProps {
    content: any;
}

export class Highlight extends Component<IHighlightProps> {
    nodeRef: React.RefObject<HTMLInputElement>;

    constructor(props) {
        super(props);
        this.nodeRef = React.createRef();
    }

    componentDidMount() {
        this.highlight();
    }

    componentDidUpdate() {
        this.highlight();
    }

    highlight = () => {
        if (this.nodeRef.current) {
            const nodes = this.nodeRef.current.querySelectorAll('pre');
            nodes.forEach((node) => {
                hljs.highlightBlock(node);
            });
        }
    }

    render() {
        const { content } = this.props;
        return (
            <div ref={this.nodeRef} dangerouslySetInnerHTML={{ __html: content }} />
        );
    }
}