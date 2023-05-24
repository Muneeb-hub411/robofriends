import React from "react";
const Searchbar = ({ searchchange }) => {
    return (
        <>

            <input type="search" className="pa3 ba b--green bg-lightest-blue" placeholder="Search Robot" onChange={searchchange} />

        </>
    )
}
export default Searchbar;