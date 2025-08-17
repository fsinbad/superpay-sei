import { useReactiveClient } from '@dynamic-labs/react-hooks';
import { client } from '@/lib/client';
import { LoginView } from '@/LoginView/LoginView';
import { DisplayAuthenticatedUserView } from '@/DisplayAuthenticatedUserView';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
	const { auth, sdk } = useReactiveClient(client);
	const router = useRouter();

	if (!sdk.loaded) {
		return <Text>Loading...</Text>;
	}

	if (!auth.token) {
		return router.push('/login');
	}

	if (auth.token) {
		return <DisplayAuthenticatedUserView />;
	}

	return <LoginView />;
}
