export const Pagination = () => {
  return (
    <div className="flex justify-center gap-12">
      <button className="btn btn-outline">Previous</button>
      <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn">2</button>
        <button className="join-item btn btn-disabled">...</button>
        <button className="join-item btn">99</button>
        <button className="join-item btn">100</button>
      </div>
      <button className="btn btn-outline">Next</button>
    </div>
  );
};

export default Pagination;
