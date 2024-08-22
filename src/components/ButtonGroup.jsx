import { useRef } from "react";
import { Button } from "./Button";

export function ButtonGroup({ onLoadSample, onImport, onExport, onDownload, onClear }) {
  const inputFile = useRef(null);

  const openUploadDialog = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  return (
    <>
      <div>
        <Button title="Load sample" icon="sample" onClick={onLoadSample} />
      </div>
      <div>
        <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} onChange={onImport}/>
        <Button title="Import" icon="import" onClick={openUploadDialog} />
      </div>
      <div>
        <Button title="Export" icon="download" onClick={onExport} />
      </div>
      <div>
        <Button title="Print" icon="print" onClick={onDownload} />
      </div>
      <div>
        <Button title="Clear" icon="clear" textColor="text-red-500" onClick={onClear} />
      </div>
    </>
  );
}

