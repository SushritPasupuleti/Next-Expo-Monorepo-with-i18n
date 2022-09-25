import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { Text, View, TouchableOpacity } from 'react-native';
import i18next from 'i18next';
import { initReactI18next, useTranslation, I18nextProvider } from 'react-i18next';

import english from './locales/en/common.json';
import klingon from './locales/kl/common.json';

const languageDetector = {
	type: 'languageDetector',
	async: true,
	detect: cb => cb('en'),
	init: () => { },
	cacheUserLanguage: () => { },
};

i18next
	//@ts-ignore: next-line
	.use(languageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		debug: true,
		resources: {
			en: {
				common: {
					...english,
				},
			},
			kl: {
				common: {
					...klingon,
				},
			},
		},
	});


export default function App() {
	const { t, i18n } = useTranslation();

	return (
		<Provider>
			<I18nextProvider i18n={i18n}>
				<TouchableOpacity
					style={{
						padding: 10,
						margin: 10,
					}}
					onPress={() => i18n.changeLanguage(i18n.language === 'kl' ? 'en' : 'kl')}>
					<Text>Change Locale {i18n.language === 'kl' ? 'en' : 'kl'}</Text>
				</TouchableOpacity>
				<NativeNavigation />
			</I18nextProvider>
		</Provider>
	)
}
