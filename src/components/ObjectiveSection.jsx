import { SimpleDisplaySection } from "./shared/SimpleDisplaySection";

export function ObjectiveSection({ objective }) {
  if (!objective || !objective.description) {
    return null;
  }

  return (
    <SimpleDisplaySection title="Objective" description={objective.description} />
  );
}

