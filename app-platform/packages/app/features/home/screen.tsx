import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { useTranslation } from 'react-i18next';

export function HomeScreen() {
	const sx = useSx()
	const { t, ready } = useTranslation('common')

	return (
		<View
			sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
		>
			<H1 sx={{ fontWeight: '800' }}>
				{t('welcome')}
			</H1>
			<View sx={{ maxWidth: 600 }}>
				<P sx={{ textAlign: 'center' }}>
					{t('about')}
				</P>
			</View>
			<View sx={{ height: 32 }} />
			<Row>
				<TextLink
					href="/user/fernando"
					textProps={{
						style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
					}}
				>
					{t('link1')}
				</TextLink>
				<View sx={{ width: 32 }} />
				<MotiLink
					href="/user/fernando"
					animate={({ hovered, pressed }) => {
						'worklet'

						return {
							scale: pressed ? 0.95 : hovered ? 1.1 : 1,
							rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
						}
					}}
					from={{
						scale: 0,
						rotateZ: '0deg',
					}}
					transition={{
						type: 'timing',
						duration: 150,
					}}
				>
					<Text
						selectable={false}
						sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
					>
						{t('motilink')}
					</Text>
				</MotiLink>
			</Row>
		</View>
	)
}
