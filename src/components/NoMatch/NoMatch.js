import React from 'react';

const NoMatch = () => {
    const NoMatchStyle = {
        textAlign: 'center',
        marginTop:'50px'
    }
    return (
        <div>
           <h2 style={NoMatchStyle}>404, Not Found!!</h2> 
        </div>
    );
};

export default NoMatch;