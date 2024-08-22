import { SimpleTextInput } from "./shared/SimpleTextInput";

export function InputPersonalInfo({ inputInfo, onSave }) {
  return (
    <div className="my-4 p-4 shadow-md rounded-md">
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* First name */}
          <SimpleTextInput title="First Name" id="firstName" initialValue={inputInfo.firstName}
            placeholder="Loc"
            onChange={(value) => onSave({ ...inputInfo, firstName: value })} />

          {/* Last name */}
          <SimpleTextInput title="Last Name" id="lastName" initialValue={inputInfo.lastName}
            placeholder="Le"
            onChange={(value) => onSave({ ...inputInfo, lastName: value })} />
        </div>

        {/* Title */}
        <div className="mb-4">
          <SimpleTextInput title="Title" id="title" initialValue={inputInfo.title}
            placeholder="Software Engineer"
            onChange={(value) => onSave({ ...inputInfo, title: value })} />
        </div>

        {/* Website */}
        <div className="mb-4">
          <SimpleTextInput title="Website" id="website" initialValue={inputInfo.website}
            placeholder="www.example.com"
            onChange={(value) => onSave({ ...inputInfo, website: value })} />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <SimpleTextInput title="Phone" id="phone" initialValue={inputInfo.phone}
            placeholder="0123456789"
            onChange={(value) => onSave({ ...inputInfo, phone: value })} />
        </div>

        {/* Email */}
        <div className="mb-4">
          <SimpleTextInput title="Email" id="email" initialValue={inputInfo.email}
            placeholder="email@example.com"
            onChange={(value) => onSave({ ...inputInfo, email: value })} />
        </div>

        {/* Address */}
        <div className="mb-4">
          <SimpleTextInput title="Address" id="address" initialValue={inputInfo.address}
            placeholder="123 Street, City, Country"
            onChange={(value) => onSave({ ...inputInfo, address: value })} />
        </div>

        {/* Birthday */}
        <div className="mb-4">
          <SimpleTextInput title="Birthday" id="birthday" initialValue={inputInfo.birthday}
            placeholder="01/01/2000"
            onChange={(value) => onSave({ ...inputInfo, birthday: value })} />
        </div>
      </div>
    </div>
  );
}

