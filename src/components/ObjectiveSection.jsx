import { SimpleDisplaySection } from "./shared/SimpleDisplaySection";

export function ObjectiveSection({ objective }) {
  return (
    <SimpleDisplaySection title="Objective" description={objective.description} />
  );
}

