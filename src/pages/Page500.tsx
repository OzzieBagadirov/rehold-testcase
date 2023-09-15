import { Text } from '../components';

export default function Page500() {
  return (
    <div className='bg-light min-vh-100 d-flex flex-row align-items-center'>
      <Text bigXl medium>
        Internal Server Error
      </Text>
    </div>
  );
}
