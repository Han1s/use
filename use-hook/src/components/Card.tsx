const Card = ({ title, children }: { title: string; children: string }) => {
  return (
    <div className="block max-w-sm p-6 border rounded-lg shadow-sm bg-gray-800 border-gray-700 m-auto">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{children}</p>
    </div>
  );
};

export default Card;
