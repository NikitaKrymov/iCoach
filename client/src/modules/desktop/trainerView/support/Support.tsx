import React from 'react';
import Test from './Test';

const Support: React.FC = (props) => {
    return(
        <div>
            <Test>

            </Test>
            <svg style={{ border: '1px solid red', width: '10em', height: '10em', transform: 'rotate(-90deg)'}}>
                <circle style={{ border: '1px solid green', color: 'black', transition: '0.5s' }} r="3em" stroke="black" stroke-width="10px" fill="transparent" cx="5em" cy="5em" strokeDasharray="18.96em 18.96em" strokeDashoffset='16em' >
                    Test
                </circle>
            </svg>
        </div>
    );
}

export default Support;