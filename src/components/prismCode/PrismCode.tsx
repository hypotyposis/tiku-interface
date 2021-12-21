import React from "react"
import Prism from "prismjs"
// import "../../css/okaidia.css"
import "prismjs/themes/prism-okaidia.css"

interface IPrismProps {
    code: string;
    plugins: any;
    language: string;
}

export class PrismCode extends React.Component<IPrismProps> {
    ref: React.RefObject<HTMLInputElement>;
    
    constructor(props) {
        super(props)
        this.ref = React.createRef();
    }
    componentDidMount() {
        this.highlight()
    }
    componentDidUpdate() {
        this.highlight()
    }
    highlight = () => {
        if (this.ref && this.ref.current) {
        Prism.highlightElement(this.ref.current)
        }
        // if (this.ref && this.ref.current) {
        //     const nodes = this.ref.current.querySelectorAll('pre');
        //     nodes.forEach((node) => {
        //         Prism.highlightElement(node);
        //     })
        // }
    }
    render() {
        const { code, plugins, language } = this.props
        return (
        <pre className={!plugins ? "" : plugins.join(" ")}>
            <code ref={this.ref} className={`language-${language}`}>
            {code.trim()}
            </code>
        </pre>
        )
    }
}