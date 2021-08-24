interface ErrorFeedbackProps {
  message: string;
}

export default function ErrorFeedback({ message }: ErrorFeedbackProps) {
  return (
    <div className="my-8 text-red text-sm border-solid border-red border-2 px-3 py-2.5 rounded-lg">
      {message}
    </div>
  );
}
