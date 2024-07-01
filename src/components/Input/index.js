import { Input } from "rsuite";
import { useForm, Controller } from "react-hook-form";

const InputComponent = ({ name }) => {
  const { control, register } = useForm();
  return (
    <Controller
      name="username"
      control={control}
      render={({ field }) => {
        console.log(field, "field 00011");

        return <Input {...field} onChange={(value) => field.onChange(value)} />;
      }}
    />
  );
};

{
  /* <Input {...register("username")} /> */
}

export default InputComponent;
