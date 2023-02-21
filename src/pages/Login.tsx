import { Button } from '../components/UI/Button/Button';
import { Input } from '../components/UI/Input/Input';

export const Login = () => {
  return (
    <div>
      <form>
        <Input type="text" placeholder="Insert name" />
        <Input type="password" placeholder="Insert password" />
        <Button>Submit</Button>
      </form>
    </div>
  );
};
