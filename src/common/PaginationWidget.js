import React from 'react';
import './PaginationWidget.css';

class PaginationWidget extends React.Component {
  renderPageNums_() {
    const pageNums = [];
    const minPage = Math.max(1, this.props.pageNum - 2);

    for (let pageNum = minPage; pageNum < minPage + 5; pageNum++) {
      pageNums.push(
        <li key={pageNum}>
          <a
            href={`/translations/${pageNum}`}
            className={this.props.pageNum === pageNum ? 'selected' : null}
          >
            {pageNum}
          </a>
        </li>
      );
    }

    return pageNums;
  }

  render() {
    return (
      <div className="pagination-widget">
        <ul className="page-numbers">
          <li>
            <a href={`/translations/${Math.max(1, this.props.pageNum - 5)}`}>
              {"<<"}
            </a>
          </li>
          <li>
            <a href={`/translations/${Math.max(1, this.props.pageNum - 1)}`}>
              {"<"}
            </a>
          </li>
          {this.renderPageNums_()}
          <li>
            <a href={`/translations/${Math.max(1, this.props.pageNum + 1)}`}>
              {">"}
            </a>
          </li>
          <li>
            <a href={`/translations/${Math.max(1, this.props.pageNum + 5)}`}>
              {">>"}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default PaginationWidget;
