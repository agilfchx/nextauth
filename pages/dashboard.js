import { useSession, getSession, signIn } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{session ? `${session.user.name}` : ''}</p>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
