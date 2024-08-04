import { SimpleTextAreaInput } from "./shared/SimpleTextAreaInput";

export function InputObjective({ objective={ description: "" }, onSave }) {
    return (
        <div className="my-4 p-4 shadow-md rounded-md">
            <div className="flex flex-col">
                {/* Objective description */}
                <div className="mb-4">
                    <SimpleTextAreaInput title="Description" placeholder="Input your objective..." id="objjective-desc" initialValue={objective.description}
                        onChange={(value) => onSave({ ...objective, description: value })} />
                </div>
            </div>
        </div>
    );
}

