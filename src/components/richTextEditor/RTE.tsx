import React, { useState, useEffect, useRef, Component } from 'react';
import ReactDOM from 'react-dom';
import styles from "./RTE.module.css"
// import E from "wangeditor"
import ReactWEditor from 'wangeditor-for-react';
import { Editor } from '@tinymce/tinymce-react';
import $ from 'jquery';
import Simditor from 'simditor'
import "../../css/simditor.css"
import editor from 'wangeditor/dist/editor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import showdown from "showdown"
import plugins from 'wangeditor/dist/plugins';
// import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';



export const RTE: React.FC = () => {
    // const [data, setData] = useState("");
    const [value, setValue] = useState('');
    useEffect(() => {
        console.log(value)
    }, [value]);

    const converter = new showdown.Converter();
    const editorRef:any = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
            let data = editorRef.current.getContent();
            let markdown = converter.makeMarkdown(data);
            let html = converter.makeHtml(markdown);
            console.log("markdown: ", markdown)
            console.log("html: ", html);
        }
    };

    useEffect(() => {
        console.log("componentDidUpdate")
    })

    onchange = (content) => {
        console.log(content)
    }

    return (
        <>
            {/* <h1>wangeditor</h1> */}
            <ReactWEditor
                defaultValue={'<h1>标题</h1>'}
                linkImgCallback={(src,alt,href) => {
                    // 插入网络图片的回调事件
                    console.log('图片 src ', src)
                    console.log('图片文字说明',alt)
                    console.log('跳转链接',href)
                }}
                onlineVideoCallback={(video) => {
                    // 插入网络视频的回调事件
                    console.log('插入视频内容', video)
                }}
                onChange={(html) => {
                    console.log('onChange html:', html)
                    let markdown = converter.makeMarkdown( html );
                    console.log("markdown: ", markdown);
                    console.log("html: ", converter.makeHtml( markdown ));
                }}
                onBlur={(html) => {
                    console.log('onBlur html:', html)
                }}
                onFocus={(html) => {
                    console.log('onFocus html:', html)
                }}
            />
            <h1>TinyMCE</h1>
            <Editor
                apiKey="ehyw9ds1s0w3zk78e7a25379gb7s5dw2eqgwg729m72plm2f"
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue=""
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                onEditorChange={(newValue, editor) => setValue(value)}
            />
            <button onClick={log}>Log editor content</button>
            <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        // setData( data );
                        let markdown = converter.makeMarkdown( data );
                        console.log("markdown: ", markdown);
                        console.log("html: ", converter.makeHtml( markdown ));
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </>
    )
}

// export class SimEditor extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         var editor = new Simditor({
//             textarea: $('#editor')
//             //optional options
//           });
//     }

//     render() {
//         return (
//             <textarea id="editor" placeholder="Balabala"></textarea>
//         )
//     }
// }