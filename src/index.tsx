import React from 'react'
import ReactDOM from 'react-dom'
import styles  from '~/styles/index.module.scss'
import Text from '~/Text'

ReactDOM.render(
	<React.StrictMode>
		<h1 className={styles.componentClass}>Index</h1>
		<p className={styles.componentClass}>p</p>
		<Text />
	</React.StrictMode>,
	document.getElementById('root')
)
