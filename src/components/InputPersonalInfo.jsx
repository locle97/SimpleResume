import { SimpleTextInput } from "./shared/SimpleTextInput";

export function InputPersonalInfo({ inputInfo, onSave }) {
    return (
        <div className="my-4 p-4 shadow-md rounded-md">
            <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* First name */}
                    <SimpleTextInput title="First Name" id="firstName" initialValue={inputInfo.firstName}
                        onChange={(value) => onSave({ ...inputInfo, firstName: value })} />

                    {/* Last name */}
                    <SimpleTextInput title="Last Name" id="lastName" initialValue={inputInfo.lastName}
                        onChange={(value) => onSave({ ...inputInfo, lastName: value })} />
                </div>

                {/* Title */}
                <div className="mb-4">
                    <SimpleTextInput title="Title" id="title" initialValue={inputInfo.title}
                        onChange={(value) => onSave({ ...inputInfo, title: value })} />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <SimpleTextInput title="Email" id="email" initialValue={inputInfo.email}
                        onChange={(value) => onSave({ ...inputInfo, email: value })} />
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <SimpleTextInput title="Phone" id="phone" initialValue={inputInfo.phone}
                        onChange={(value) => onSave({ ...inputInfo, phone: value })} />
                </div>

                {/* Address */}
                <div className="mb-4">
                    <SimpleTextInput title="Address" id="address" initialValue={inputInfo.address}
                        onChange={(value) => onSave({ ...inputInfo, address: value })} />
                </div>
            </div>
        </div>
    );
}

