type HeadingProps = {
  text: string;
};

const Heading = ({ text }: HeadingProps) => {
  return <h1 className="font-semibold text-4xl text-gray-900">{text}</h1>;
};

export default Heading;
