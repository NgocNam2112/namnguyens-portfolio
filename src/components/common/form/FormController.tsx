import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { ElementType } from 'react';

type Props<FormType extends FieldValues, FieldProps> = {
  name: Path<FormType>;
  control: Control<FormType>;
  Field: ElementType;
  fieldProps?: FieldProps;
};

function FormController<FormType extends FieldValues, FieldProps>({
  name,
  control,
  fieldProps,
  Field,
}: Props<FormType, FieldProps>) {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          const handleBlur = (
            e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            let value = e.target.value;

            if (typeof value === 'string') {
              value = value.trim();
              field.onChange(value);
              e.target.value = value;
            }

            field.onBlur();
          };
          return (
            <Field
              {...field}
              {...fieldProps}
              id={field.name}
              error={fieldState.error}
              onBlur={handleBlur}
            />
          );
        }}
      />
    </div>
  );
}

export default FormController;
