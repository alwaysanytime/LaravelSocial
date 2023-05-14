import { useRef } from "react";
import ReactAvatarEditor from 'react-avatar-editor'
import styled from "styled-components";
import Modal from "../Modal/Modal";
import { useState } from "react";

const AvatarEditor = (props) => {
    
    const [image, setImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({x: 0.5, y: 0.5});
    const [borderRadius, setBorderRadius] = useState(0);
    const [width, setWidth] = useState(300);
    const [height, setHeight] = useState(300);
    const [rotate, setRotate] = useState(0);
    const [allowZoomOut, setAllowZoomOut] = useState(false);

    const handleScale = e => {
        const scale = parseFloat(e.target.value)
        setScale(scale);
    }

    const handlePositionChange = position => {
        setPosition(position)
    }

    const onClickSave = () => {
        const canvasScaled = editor.getImageScaledToCanvas();
        const url = canvasScaled.toDataURL('image/jpeg');
        props.upload(url);
        props.hideModal();
    }

    const [editor, setEditor] = useState();

    const setEditorRef = (_editor) => (setEditor(_editor));

    return (
        <Modal visible={props.visible}>
            <div style={{backgroundColor: 'white', borderRadius: 10}} className="d-flex p-3 justify-content-center flex-column">
                <div class="d-flex w-100 justify-content-between mb-3">
                    <button className="btn btn-outline-dark mr-2" onClick={() => props.hideModal()} style={{borderRadius: 20, width: 100}}>Cancel</button>
                    <button className="btn btn-primary" onClick={() => onClickSave()} style={{borderRadius: 20, width: 100}}>Save</button>
                </div>
                <div>
                    { props.avatar ? <ReactAvatarEditor
                        ref={setEditorRef}
                        scale={parseFloat(scale)}
                        width={width}
                        height={height}
                        position={position}
                        onPositionChange={handlePositionChange}
                        rotate={parseFloat(rotate)}
                        borderRadius={width / (100 / borderRadius)}
                        image={props.avatar}
                        className="editor-canvas"
                    /> : '' }
                </div>
                <br />
                <input
                    name="scale"
                    type="range"
                    onChange={handleScale}
                    min={allowZoomOut ? '0.1' : '1'}
                    max="2"
                    step="0.01"
                    defaultValue="1"
                />
            </div>
        </Modal>
    );
};

export default AvatarEditor;