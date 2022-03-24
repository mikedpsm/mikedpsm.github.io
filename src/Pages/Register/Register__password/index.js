import './index.css';

import ProgressSectionStep2 from '../../../Components/Sections/Progress-section-step2';
import FormSectionPassword from '../../../Components/Sections/Form-section-password';


function RegisterPassword() {
  return (
    <div className="Register">
      <ProgressSectionStep2/>
      <FormSectionPassword/>
    </div>
  );
}

export default RegisterPassword;