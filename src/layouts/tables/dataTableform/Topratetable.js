import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { fetchPopular } from 'service/movieAtion'

export default function Topratetable() {

    const[filterProduct,setFilterProduct]=useState([])
    const [search,setProduct] = useState([])

    const columns = [
        {
            name: 'Title Movies',
            selector: row => row.title,
            sortable:true
        },
        {
            name: 'Movies Date',
            selector: row => row.release_date,
            sortable:true
        },
        {
            name: 'Vote Average',
            selector: row => row.vote_average,
            sortable:true
        },
        {
            name: 'Vote Count',
            selector: row => row.vote_count,
            sortable:true
        },
        {
            name: 'Poster Movies',
            selector: row =>  
                <img src={"http://image.tmdb.org/t/p/w500"+row.poster_path} alt="movies_img" style={{width :"70px"}} />
             
        },
        {
            name: 'Action',
            selector: row =><button
             type='button'
             // navigate move to next slide ,{move with something}
            //  onClick={() => navigate("/onemovies",{
            //     state: row
            //  })}
              className='btn btn-danger'
            >Edit</button>
        }
    ];
    useEffect(()=>{
        fetchPopular(search)
        .then(resp => setFilterProduct(resp))
    },[search])
  return (
<div className='container'>
        <DataTable
        columns={columns}
        // data={filterProduct}
        data={filterProduct?.results}
        pagination
        subHeader
        subHeaderComponent={
            <input 
            type='text'
            placeholder='search here..'
            className='form-control'
            value={search}
            onChange={(e) => {
                setProduct(e.target.value)
                console.log(search)
            }}
            />
        }
        />
    </div> 
  )
}
