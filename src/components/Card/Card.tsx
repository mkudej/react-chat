interface CardProps {
  children: any;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="px-14 py-10 border-solid border-border-color border rounded-3xl max-w-md">
      {children}
    </div>
  );
}
