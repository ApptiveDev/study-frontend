import { LoaderCircleIcon } from 'lucide-react';

type LoadingProps = {
  label: string;
};

export default function Loading({ label }: LoadingProps) {
  return (
    <p className="flex items-center gap-2 p-4 text-neutral-400">
      <LoaderCircleIcon className="size-4 animate-spin" />
      {label}
    </p>
  );
}
