import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onPageChange(Number(event.target.value));
  };

  return (
    <div>
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        &lt; {/* or use an arrow image */}
      </button>
      
      <span>
        Page{' '}
        <select value={currentPage} onChange={handlePageSelect}>
          {Array.from({ length: totalPages }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>{' '}
        of {totalPages}
      </span>
      
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        &gt; {/* or use an arrow image */}
      </button>
    </div>
  );
};

export default Pagination;