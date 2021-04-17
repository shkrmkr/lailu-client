import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, SchemaOf, string } from 'yup';

interface SignupFormData {
  username: string;
  password: string;
  confirmPassword: string;
}

const signupFormSchema: SchemaOf<SignupFormData> = object().shape({
  username: string().email().required(),
  password: string().min(6).required(),
  confirmPassword: string()
    .test({
      name: 'confirmPassword',
      message: '비밀번호가 일치하지 않습니다.',
      test(value) {
        return this.parent.password === value;
      },
    })
    .required('비밀번호를 다시 한 번 입력해주세요.'),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: yupResolver(signupFormSchema),
    mode: 'onBlur',
  });

  return <div>register page</div>;
};

export default Signup;
