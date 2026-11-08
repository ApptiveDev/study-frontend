import { CircleAlertIcon } from 'lucide-react';

type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <p className="flex items-center gap-2 p-4 text-red-500">
      <CircleAlertIcon className="size-4" />
      {message}
    </p>
  );
}
