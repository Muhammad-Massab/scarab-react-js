import { useFormContext, Controller } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
}

export default function InputField({
  name,
  label,
  placeholder,
  type = "text",
}: InputFieldProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="my-2">
      <label
        htmlFor="CNIC"
        className="block text-sm font-sans font-bold  leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className="block h-10 w-96 px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none"
            />
          )}
        />
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {(errors[name]?.message as string) || "Invalid input"}
        </p>
      )}
    </div>
  );
}
