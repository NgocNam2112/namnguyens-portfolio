import { cn } from '@/lib/utils';
import * as React from 'react';
import { FieldError } from 'react-hook-form';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  error?: FieldError;
  label?: string;
  infoIcon?: React.ReactNode;
  disabled?: boolean;
  errorMessage?: string;
  valid?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      error,
      label,
      infoIcon,
      disabled,
      errorMessage,
      valid,
      maxLength,
      required,
      ...props
    },
    ref
  ) => {
    const getLabelStyles = () => {
      // if (disabled) {
      //     return 'text-secondary-08'
      // }
      if (error || errorMessage) {
        return 'text-danger-01';
      }
      return 'text-color-text-03';
    };

    const getInputStyles = () => {
      if (disabled) {
        return 'cursor-not-allowed';
      }
      if (error || errorMessage) {
        return 'border-red-500 focus:border-red-500 focus:ring-0 bg-white !text-red-500';
      }
      if (valid) {
        return 'border-green-500 focus:border-green-500 focus:ring-green-500 bg-[#F6F7FB] text-secondary-200';
      }
      return 'border-transparent focus:border-tertiary-400 focus:ring-tertiary-100 bg-white border border-neutral-200';
    };

    const handleTextareaMaxLength = (
      e: React.ChangeEvent<HTMLTextAreaElement>,
      maxLength?: number,
      onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    ) => {
      const { value } = e.target;
      if (maxLength && value.length > maxLength) {
        const newValue = value.slice(0, maxLength);

        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLTextAreaElement.prototype,
          'value'
        )?.set;
        nativeInputValueSetter?.call(e.target, newValue);

        const event = new Event('input', { bubbles: true });
        e.target.dispatchEvent(event);
      } else {
        onChange?.(e);
      }
    };

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            className={cn(
              'body-1-regular transition-colors duration-200',
              getLabelStyles()
            )}
          >
            {label} {required && <span className="text-danger">*</span>}{' '}
            {infoIcon && infoIcon}
          </label>
        )}

        <textarea
          className={cn(
            'flex min-h-[116px] w-full rounded-md px-3 py-2 ring-offset-white text-sm ',
            'flex h-10 w-full rounded-[3px] border border-transparent px-3 py-3 text-sm transition-all outline-none text-color-text-01 caret-primary-02',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'placeholder:text-secondary-100',
            'focus:border-primary-05 focus:ring-2 focus:ring-primary-08 bg-background-tertiary',
            disabled ? 'resize-none' : 'resize-y',
            getInputStyles(),
            className
          )}
          rows={4}
          ref={ref}
          disabled={disabled}
          maxLength={maxLength}
          onChange={e => handleTextareaMaxLength(e, maxLength, props.onChange)}
          {...props}
        />
        <div className="flex justify-between gap-4">
          {/* Error Message */}
          <div className="flex items-center gap-1">
            {error && (
              <span className="text-red-500 text-xs">
                {error.message || 'Error message'}
              </span>
            )}
          </div>
          {maxLength && (
            <div className="text-right text-color-text-01 text-secondary-100">
              {props?.value?.toString().length}/{maxLength} {'characters'}
            </div>
          )}
        </div>
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
