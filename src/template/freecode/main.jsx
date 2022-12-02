import { useMemo } from "react"
// there is 5 main case
// 1. <[1,2,3,4,5]>
// 2. <[1,...,4,5,6,7,8,...,30]
// 3. <[1,...,5,6,7,8,9,10]
// 4. <[1,2,3,4,5,...,19]
export const usePagination = ({
    totalCount, pageSize , siblingCount = 1,currentPage
}) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
// Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5

        // case 1 [1...totalPagecount]
        if (totalPageNumbers >= totalPageCount) {
            return range(1,totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex  = Math.min(currentPage+siblingCount,totalPageCount);
        const shouldShowLeftDots  = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex  < totalPageCount - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount
        
        
        // Case 2: No left dots to show, but rights dots to be shown
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1,leftItemCount)
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
      
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
              totalPageCount - rightItemCount + 1,
              totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
          }
           
          /*
              Case 4: Both left and right dots to be shown
          */
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
          }


    },[totalCount,pageSize,siblingCount,currentPage]);

    return paginationRange;
};


export const range = (start , end) => {
    let length = end -start + 1;


    return Array.from({length}, (_,idx) => idx + start);
}
