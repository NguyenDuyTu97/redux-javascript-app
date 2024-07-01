import { useForm, Controller } from "react-hook-form";
import { DateRangePicker, Input } from "rsuite";
import InputComponent from "../Input";

export default function Form() {
  const { control, register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>React hook form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <InputComponent /> */}
        <Input {...register("name1")} />

        {/* <Controller
          name="username"
          control={control}
          render={({ field }) => {
            console.log(field, "field 00011");

            return (
              <Input {...field} onChange={(value) => field.onChange(value)} />
            );
          }}
        /> */}

        <input {...register("firstName")} />
        <br />

        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <br />

        <Controller
          name="dateRange"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <DateRangePicker
              {...field}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
