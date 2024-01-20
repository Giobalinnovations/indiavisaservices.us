const StepperFormSteps = () => {
  return (
    <ul className="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
      {/* First item */}
      <li className="w-[4.5rem] flex-auto">
        <div className="flex cursor-pointer items-center pl-2 leading-[1.3rem] no-underline after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] focus:outline-none dark:after:bg-neutral-300 ">
          <span className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
            1
          </span>
          <span className="font-medium text-primary after:flex after:text-[0.8rem] after:content-[data-content] ">
            step1
          </span>
        </div>
      </li>

      {/* Second item */}
      <li className="w-[4.5rem] flex-auto">
        <div className="flex cursor-pointer items-center leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] after:ml-2 after:h-px after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] focus:outline-none dark:before:bg-neutral-300 dark:after:bg-neutral-300 ">
          <span className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
            2
          </span>
          <span className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
            step2
          </span>
        </div>
      </li>

      {/* Third item */}
      <li className="w-[4.5rem] flex-auto">
        <div className="flex cursor-pointer items-center pr-2 leading-[1.3rem] no-underline before:mr-2 before:h-px before:w-full before:flex-1 before:bg-[#e0e0e0] before:content-[''] focus:outline-none dark:before:bg-neutral-300 dark:after:bg-neutral-300 ">
          <span className="my-6 mr-2 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
            3
          </span>
          <span className="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
            step3
          </span>
        </div>
      </li>
    </ul>
  );
};

export default StepperFormSteps;
