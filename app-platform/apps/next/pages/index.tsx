import React from 'react'
import { HomeScreen } from 'app/features/home/screen'
import { Trans, I18nContext } from 'next-i18next'
import { useTranslation, I18nextProvider } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head';
import { useRouter } from 'next/router'
import Link from 'next/link'
// export default HomeScreen;

//@ts-ignore: next-line
function Home() {

	const router = useRouter()
	const { t, ready, i18n } = useTranslation('common')

	console.log("T: ", t, ready)

	//@ts-ignore: next-line
	const onToggleLanguageClick = (newLocale) => {
		const { pathname, asPath, query } = router
		router.push({ pathname, query }, asPath, { locale: newLocale })
	}

	const changeTo = router.locale === 'en' ? 'kl' : 'en'
	return (
		<>
			<Head>
				<title>
					{t('title')}
				</title>
			</Head>
			<I18nextProvider i18n={i18n}>
				<HomeScreen />
			</I18nextProvider>
			<Link
				href='/'
				locale={changeTo}
			>
				<button>
					Change Locale to: {changeTo}
				</button>
			</Link>
		</>
	)
}

//@ts-ignore: next-line
// export const getServerSideProps = async ({ locale }) => ({
export const getStaticProps = async ({ locale }) => ({
	props: {
		...await serverSideTranslations(locale, ['common']),
	},
})

export default Home
