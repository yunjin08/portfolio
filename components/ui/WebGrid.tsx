import Image from "next/image";

type WebGridProps = {
  className?: string;
};

// Classname Prop should be used to add custom styles for positioning the grid
function WebGrid({ className }: WebGridProps) {
  return (
    <div className={`w-full absolute left-0  min-h-96 ${className}`}>
      <Image
        src="/footer-grid.svg"
        alt="grid"
        width={1000}
        height={1000}
        className="w-full h-full opacity-50 object-cover"
      />
    </div>
  );
}

export default WebGrid;
