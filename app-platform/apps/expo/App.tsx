import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { Text, View, TouchableOpacity } from 'react-native';
import i18next from 'i18next';
import { initReactI18next, useTranslation, I18nextProvider } from 'react-i18next';

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
					"welcome": "Welcome to the internationalized Solito Repo",
					"about": "This repo uses i18n for internationalization in a Solito Monorepo with a Next and Expo app.",
					"link1": "Regular Link",
					"motilink": "Moti Link",
					"title": "i18n Solito Example"
				},
			},
			kl: {
				common: {
					"welcome": "yAy'chaj DIruch",
					"about": "qaStaHvIS poH, veqlargh mInDu'wIj.",
					"link1": "reghuluS",
					"motilink": "Qel",
					"title": "tlha' vutwI'"
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
					<Text>Change Locale</Text>
				</TouchableOpacity>
				<NativeNavigation />
			</I18nextProvider>
		</Provider>
	)
}
