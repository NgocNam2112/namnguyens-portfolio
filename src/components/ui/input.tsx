import { cn } from '@/lib/utils';
import { CheckCircle } from 'lucide-react';
import * as React from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends React.ComponentProps<'input'> {
  label?: string;
  error?: FieldError;
  errorMessage?: string;
  valid?: boolean;
  infoIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      error,
      errorMessage,
      valid,
      disabled,
      infoIcon,
      prefixIcon,
      suffixIcon,
      placeholder,
      value,
      required,
      maxLength = 255,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-2">
        {/* Label positioned above input */}
        {label && (
          <label
            className={cn(
              'body-1-regular transition-colors duration-200 text-color-text-03',
              (error || errorMessage) && 'text-danger-01'
            )}
          >
            {label} {required && <span className="text-danger">*</span>}{' '}
            {infoIcon && infoIcon}
          </label>
        )}

        <div className="relative">
          {/* Prefix Icon */}
          {prefixIcon && (
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-grey-500 z-20">
              {prefixIcon}
            </span>
          )}

          {/* Input Field */}
          <input
            type={type}
            disabled={disabled}
            className={cn(
              'flex h-10 w-full rounded-[3px] border border-transparent px-3 py-3 text-sm transition-all outline-none text-color-text-01 caret-primary-02',
              'file:border-0 file:bg-transparent file:text-sm file:font-medium',
              'placeholder:text-secondary-100',
              'focus:ring-2 focus:border-tertiary-400 focus:ring-tertiary-100 bg-background-tertiary',
              ' bg-white border-neutral-200',
              disabled && 'cursor-not-allowed',
              (error || errorMessage) &&
                'border-red-500 focus:border-red-500 focus:ring-0',
              prefixIcon && 'pl-10',
              (suffixIcon || error || errorMessage || valid) && 'pr-10',
              className
            )}
            placeholder={placeholder}
            value={value}
            ref={ref}
            maxLength={maxLength}
            onChange={e => {
              const inputValue = e.target.value;
              if (inputValue.length <= maxLength) {
                props.onChange?.(e);
              }
            }}
            {...props}
          />

          {/* Status Icons */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-danger-200 flex items-center gap-1">
            {valid && !error && !errorMessage && (
              <span className="">
                <CheckCircle size={20} />
              </span>
            )}
            {suffixIcon && !valid && <span className="">{suffixIcon}</span>}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-1">
            <span className="text-red-500 text-xs">
              {error.message || 'Error message'}
            </span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
