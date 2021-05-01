import { defaultProps } from '@nivo/pie';
import React from 'react';
import FlexBox from '../../elements/desktop/commonElements/FlexBox';
import FormField from '../../elements/desktop/commonElements/FormField';
import FormFieldset from '../../elements/desktop/commonElements/FormFieldset';
import GridBox from '../../elements/desktop/commonElements/GridBox';
import PrimaryButton from '../../elements/desktop/commonElements/PrimaryButton';
import RegistrationPageContainer from '../../elements/desktop/registrationElements/RegistrationPageContainer';
import RegistrationPageGridRow from '../../elements/desktop/registrationElements/RegistrationPageGridRow';
import { theme } from '../../theme';

const TWO_COLUMNS_FIELDSET_STYLE = {
    width: "15em"
}

const BLOCK_TITLE_THEME = {
    justifyContent: theme.justifyContent.center,
    alignItems: theme.alignItems.center,
    fontSize: '1.2em',
    margin: '1em 0 0.5em 0'
}

interface Props {
    match: any
}

const ClientRegistrationPage: React.FC<Props> = (props) => {
    console.log(props);
    return(
        <RegistrationPageContainer>
            <RegistrationPageGridRow style={{ width: '40em', flexDirection: 'column', borderBottom: `1px solid ${theme.colors.mainBlue}`}}>
                <FlexBox style={{ marginTop: '1em', fontSize: '2em', color: theme.colors.mainBlue }}>
                    Welcome to iCoach
                </FlexBox>
                <FlexBox style={{ marginTop: '1em', marginBottom: '1em'}}>
                    To access your courses finish the registration
                </FlexBox>
            </RegistrationPageGridRow>
            <RegistrationPageGridRow style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <FlexBox theme={BLOCK_TITLE_THEME}>
                    Personal Information
                </FlexBox>
                <GridBox theme={{ gridTemplateColumns: '1fr 1fr 1fr', gridGap: '1em'  }}>
                    <FormFieldset>
                        <legend>
                            First Name
                        </legend>
                        <FormField />
                    </FormFieldset>
                    <FormFieldset>
                        <legend>
                            Last Name
                        </legend>
                        <FormField />
                    </FormFieldset>
                    <FormFieldset>
                        <legend>
                            Date of Birth
                        </legend>
                        <FormField />
                    </FormFieldset>
                </GridBox>
                <FlexBox theme={BLOCK_TITLE_THEME}>
                    Contact Information
                </FlexBox>
                <GridBox theme={{ gridTemplateColumns: '1fr 1fr', gridGap: '1em'}}>
                    <FormFieldset style={TWO_COLUMNS_FIELDSET_STYLE}>
                        <legend>
                            Phone
                        </legend>
                        <FormField />
                    </FormFieldset>
                    <FormFieldset style={TWO_COLUMNS_FIELDSET_STYLE}>
                        <legend>
                            Email
                        </legend>
                        <FormField />
                    </FormFieldset>
                </GridBox>
                <GridBox theme={{ gridTemplateColumns: '1fr 1fr 1fr', gridGap: '1em', width: '100%'  }}>
                    <FormFieldset>
                        <legend>
                            Country
                        </legend>
                        <FormField />
                    </FormFieldset>
                    <FormFieldset>
                        <legend>
                            State
                        </legend>
                        <FormField />
                    </FormFieldset>
                    <FormFieldset>
                        <legend>
                            City
                        </legend>
                        <FormField />
                    </FormFieldset>
                </GridBox>
                <FlexBox theme={BLOCK_TITLE_THEME}>
                    Security Information
                </FlexBox>
                <GridBox theme={{ gridTemplateColumns: '1fr 1fr', gridGap: '1em', width: '100%'  }}>
                    <FormFieldset  style={TWO_COLUMNS_FIELDSET_STYLE}>
                        <legend>
                            Password
                        </legend>
                        <FormField type="password" />
                    </FormFieldset>
                    <FormFieldset  style={TWO_COLUMNS_FIELDSET_STYLE}>
                        <legend>
                            Confirm Password
                        </legend>
                        <FormField type='password' />
                    </FormFieldset>
                </GridBox>
            </RegistrationPageGridRow>
            <RegistrationPageGridRow>
                <PrimaryButton>
                    Register
                </PrimaryButton>
            </RegistrationPageGridRow>
        </RegistrationPageContainer>
    );
}

export default ClientRegistrationPage;