import { useState } from "react";

const Pagination = () => {

    const [Npages, setNpages] = useState(1);

    const pages = [
        {page: Npages},
        {page: Npages +1},
        {page: Npages +2},
        {page: Npages +3},
        {page: '...'},
        {page: Npages +6},
        {page: Npages +7},
        {page: Npages +8},
        {page: Npages +9},
        {page: Npages +10},
    ]

    return (
        <div className="flex bg-orange-200 rounded-lg">
            <button className="h-12 border-2 border-r-0 border-indigo-600 px-4 rounded-lg hover:bg-indigo-500 hover:text-white">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.41414 4a1 1 0 010
                1.4141-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </button>
            {
                pages.map((ps,idx) => (
                    <button key={idx} className='h-12 border-2 border-r-0 border-indigo-300 mx-10 px-2'>
                        <div className="mx-10">{ps.page}</div>
                    </button>
                ))
            }
            <button className="h-12 border-2 border-r-0 border-indigo-600 px-4 rounded-lg hover:bg-indigo-500 hover:text-white">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.41414 4a1 1 0 010
                1.4141-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </button>
        </div>
    )
};

export default Pagination;