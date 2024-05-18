interface IRadioInputProps {
  active: boolean;
}

export default function RadioInput({ active }: IRadioInputProps) {
  return (
    <button
      className={`w-[14px] h-[14px] ring-[3px] ring-primary-dark rounded-full border-white border-[2px] ${active ? 'bg-primary-dark' : 'bg-white'}`}
    />
  );
}
