import React from 'react';
import CreateNewCourseModalContainer from '../../../../elements/desktop/programsElements/CreateNewCourseModalContainer';

const CreateNewCourseModal: React.FC = () => {
    return(
        <div style={{ position: 'absolute', left: '0', top: '0', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <CreateNewCourseModalContainer>
                Test
            </CreateNewCourseModalContainer>
        </div>
    );
}

export default CreateNewCourseModal;