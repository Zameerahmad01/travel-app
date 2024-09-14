import Image from "next/image";

type BUttonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: BUttonProps) => {
  return (
    <button
      className={`flexCenter gap-2  ${variant} ${
        full && "w-full"
      } rounded-3xl px-4 py-2 transition-all hover:opacity-80`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
      <label className="bold-14 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
