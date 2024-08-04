import { Icon } from "./Icon";

export function Button({ title, icon, textColor, onClick }) {
  const className = `px-4 py-2 justify-center flex-auto duration-150 hover:!border-b-2 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 cursor-pointer ${textColor}`;

  return (
    <div className={className} onClick={onClick}>
      {
        icon &&
        <div className="mr-2">
          <Icon iconType={icon} />
        </div>
      }
      <div className={`${textColor}`}>
        {title}
      </div>
    </div>
  );
}

