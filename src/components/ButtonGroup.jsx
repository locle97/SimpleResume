import { Button } from "./Button";

export function ButtonGroup({ onLoadSample, onDownload, onClear }) {
  return (
    <>
      <div>
        <Button title="Load sample" icon="sample" onClick={onLoadSample} />
      </div>
      <div>
        <Button title="Export & Print" icon="download" onClick={onDownload} />
      </div>
      <div>
        <Button title="Clear" icon="clear" textColor="text-red-500" onClick={onClear} />
      </div>
    </>
  );
}

