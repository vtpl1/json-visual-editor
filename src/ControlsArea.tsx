import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Clipboard from 'clipboard';
import { saveAs } from 'file-saver';

import OptionMenu from './OptionMenu';
import { RootState } from '.';
import { dataSlice } from './features/data/dataSlice';

const ControlsArea: React.FC = () => {
  useEffect(() => {
    // init clipboard
    new Clipboard('#copy-to-clipboard');
  }, []);

  const downloadJson = (text: string) => {
    var blob = new Blob([text], { type: 'application/json;charset=utf-8' });
    saveAs(blob, 'data.json');
  };

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);
  const textCount = useSelector((state: RootState) => state.textarea.textCount);
  const text = useMemo(() => {    
    return JSON.stringify(data, null, 2);
  }, [data]);
  const isEmpty = useMemo(() => text.length === 0, [text.length]);
  const { setData } = dataSlice.actions;

  return (
    <div className="controls-area">
      <div className="float-left">
        <button
          id="copy-to-clipboard"
          data-clipboard-target="#json-text"
          disabled={isEmpty}
          className="mdl-button mdl-js-button mdl-button--icon"
          title="Copy"
        >
          <i className="material-icons">content_copy</i>
        </button>
      </div>
      <div className="float-left">
        <button
          id="donwload"
          disabled={isEmpty}
          className="mdl-button mdl-js-button mdl-button--icon"
          onClick={() => downloadJson(text)}
          title="Download"
        >
          <i className="material-icons">file_download</i>
        </button>
      </div>
      <div className="float-left">
        <button
          className="mdl-button mdl-js-button mdl-button--icon"
          disabled={isEmpty}
          onClick={() => dispatch(setData(null))}
          title="Clear"
        >
          <i className="material-icons">delete</i>
        </button>
      </div>
      <div className="float-left">
        <button
          className="mdl-button mdl-js-button mdl-button--icon"
          title="More"
          id="more-button"
        >
          <i className="material-icons">more_vert</i>
        </button>
        <OptionMenu />
      </div>
      <div className="float-right control-count">
        <span className="text-count">{textCount}</span>
      </div>
    </div>
  );
};

export default ControlsArea;
