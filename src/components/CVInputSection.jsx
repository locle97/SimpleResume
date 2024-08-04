import React, { useState } from 'react';
import { Button } from './Button.jsx';
import { ButtonGroup } from "./ButtonGroup";
import { sampleData } from '../data.jsx';
import { emptyData } from '../emptyData.jsx';
import { Accordion } from './shared/Accordion.jsx';

function SimpleTextInput({ title, id, initialValue, onChange }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        value={initialValue}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 p-2 w-full border rounded-md"
      />
    </div>
  )
}

function InputPersonalInfo({ inputInfo, onSave }) {
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
  )
}

function CVInputSection({ cvData, onChangeCV }) {
  const handleLoadSample = () => {
    onChangeCV(sampleData);
  }

  const handleDownloadCV = () => {
    window.print();
  }

  const handleClear = () => {
    onChangeCV(emptyData);
  }

  const handleSavePersonalInfo = (info) => {
    onChangeCV({ ...cvData, personalInfo: info });
  }

  return (
    <div className="print:hidden m-4 w-1/3 shadow-md rounded-md flex flex-col">
      <h1 className="text-2xl text-center bg-gray-100 p-2 rounded-t-md">Simple CV Builder</h1>
      <div className="p-4 flex">
        <ButtonGroup onLoadSample={handleLoadSample}
          onDownload={handleDownloadCV}
          onClear={handleClear} />
      </div>
      <Accordion title="Personal Info">
        <InputPersonalInfo inputInfo={cvData.personalInfo} onSave={handleSavePersonalInfo} />
      </Accordion>
    </div>
  );
}

export default CVInputSection;
