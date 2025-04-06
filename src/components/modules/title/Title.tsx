type Props = {
  title: string;
  className?: string;
};

const Title = (props: Props) => {
  return (
    <div
      className={`${props.className ? props.className : ""} flex flex-row-reverse items-baseline justify-end gap-2 text-2xl font-bold`}
    >
      <h5 className="mb-2 !text-base sm:!text-xl">{props.title}</h5>
      <div className="bg-purple h-2 w-2 rounded-xl">
        <div className="bg-purple h-2 w-2 animate-ping rounded-xl"></div>
      </div>
    </div>
  );
};

export default Title;
