import React from 'react'
import { HomeScreen } from 'app/features/home/screen'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head';
import { useRouter } from 'next/router'
import Link from 'next/link'
// export default HomeScreen;

//@ts-ignore: next-line
function Home() {

	const router = useRouter()
	const { t, ready } = useTranslation('common')

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
			<HomeScreen />
			<Link
				href='/'
				locale={changeTo}
			>
				<button>
					{t('change-locale', { changeTo })}
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
