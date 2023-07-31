
export function getPager(totalItems, currentPage = 1, pageSize = 10) {
    let totalPages = Math.ceil(totalItems / pageSize);
    let startPage, endPage;
  
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }
  
    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
  
    // create an array of pages to ng-repeat in the pager control
    let pages = range(startPage, endPage + 1);
  
    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }
  function range(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    if (!step) {
      step = stop < start ? -1 : 1;
    }
  
    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);
  
    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }
  
    return range;
  }