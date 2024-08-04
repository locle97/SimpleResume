import { Button } from "./Button";

export function ButtonGroup({ onLoadSample, onDownload, onClear }) {
  return (
    <>
      <div className="w-full mr-2">
        <Button title="Load sample CV" icon="sample" onClick={onLoadSample} />
      </div>
      <div className="w-full mr-2">
        <Button title="Download CV" icon="download" onClick={onDownload} />
      </div>
      <div className="w-full">
        <Button title="Clear" icon="clear" textColor="text-red-500" onClick={onClear} />
      </div>
    </>
  );
}

