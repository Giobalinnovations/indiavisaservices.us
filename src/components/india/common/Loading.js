import { ImSpinner2 } from 'react-icons/im';

export default function Loading() {
  return (
    <div className="flex items-center justify-center flex-1 pt-20">
      <ImSpinner2 className="w-4 h-4 text-black animate-spin" />
      loading
    </div>
  );
}
