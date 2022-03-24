import './index.css';

import ProgressSectionStep3 from '../../../Components/Sections/Progress-section-step3';
import FormSectionComplete from '../../../Components/Sections/Form-section-complete';


function RegisterComplete() {
  return (
    <div className = "Register">
      <ProgressSectionStep3/>
      <FormSectionComplete/>
    </div>
  );
}

export default RegisterComplete;