import React from 'react';

const FacilityDetailsPage = async ({params}) => {
    const {id} = await params;
    console.log(id);
    return (
        <div>
            details page...
        </div>
    );
};

export default FacilityDetailsPage;