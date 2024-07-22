
type HeadingProps = {
    text: string;  
  };

export default function Text({text}: HeadingProps) {
return (
    <p className="text-lg font-bold drop-shadow-sm ">{text}</p>
)
}
