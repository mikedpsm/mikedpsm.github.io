import './index.css';
import ProgressSectionLogin from '../../Components/Sections/Progress-section-login';
import FormSectionLogin from '../../Components/Sections/Form-section-login';


function Login() {
  return (
    <div className = "Login">
      <ProgressSectionLogin/>
      <FormSectionLogin/>
    </div>
  );
}

export default Login;