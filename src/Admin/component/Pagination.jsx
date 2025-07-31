// src/components/Pagination.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page); // Trigger the parent component's function to change the page
  };

  return (
    <div className="dash-pagination">
      <div className="row align-items-center">
        <div className="col-6">
          <p>
            Page {currentPage} of {totalPages}
          </p>
        </div>
        <div className="col-6">
          <ul className="pagination">
            {/* Previous Page */}
            <li className={currentPage === 1 ? 'disabled' : ''}>
              <Link to="#" onClick={() => handlePageChange(currentPage - 1)}>
                <i className="bx bx-chevron-left" />
              </Link>
            </li>

            {/* Page Number Buttons */}
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                <Link to="#" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </Link>
              </li>
            ))}

            {/* Next Page */}
            <li className={currentPage === totalPages ? 'disabled' : ''}>
              {/* Only show the "Next" button if it's not the last page */}
              {currentPage < totalPages && (
                <Link to="#" onClick={() => handlePageChange(currentPage + 1)}>
                  <i className="bx bx-chevron-right" />
                </Link>
              )}
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;