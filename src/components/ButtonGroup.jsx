import { Button } from "./Button";

export function ButtonGroup({ onLoadSample, onImport, onExport, onDownload, onClear }) {
  return (
    <>
      <div>
        <Button title="Load sample" icon="sample" onClick={onLoadSample} />
      </div>
      <div>
        <Button title="Import" icon="import" onClick={onImport} />
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

