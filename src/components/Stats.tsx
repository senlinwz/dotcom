const Stats = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-4 my-8">
      <div className="flex flex-col items-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <span className="text-2xl font-bold text-primary">32K+</span>
        <span className="text-gray-600">GitHub Stars</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <span className="text-2xl font-bold text-primary">260+</span>
        <span className="text-gray-600">Contributors</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <span className="text-2xl font-bold text-primary">3.9M+</span>
        <span className="text-gray-600">Docker Pulls</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <span className="text-2xl font-bold text-primary">📦</span>
        <span className="text-gray-600">Releases</span>
      </div>
    </div>
  );
};

export default Stats;
