import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import CompanyList from './CompanyList';
import MailContext from './MailContext';
import UserList from './UserList';
import EmailList from './EmailList';
import EmailBody from './EmailBody';

const styles = theme => ({
	column: {
		flex: '1 0 25%',
		position: 'relative',
		height: '95vh',
		padding: '0.75rem',
		paddingTop: '0px',
		background: '#eeeeee',
		margin: '0.25rem',
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			width: '0px',
			background: 'transparent',
		},
		'&::-webkit-scrollbar-thumb': {
			background: 'red',
		},
	},
	holder: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
		display: 'flex',
		height: '80vh',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const Index = ({ classes }) => {
	const { mailCtxt, setMailCtxt } = useContext(MailContext);

	return (
		<div style={{ display: 'flex', flexDirection: 'row', height: '80vh' }}>
			<Paper
				elevation={1}
				className={classes.column}
				style={{ flex: '0 1 20%' }}>
				<CompanyList />
			</Paper>
			<Paper
				elevation={1}
				className={classes.column}
				style={{ flex: '0 1 20%' }}>
				{mailCtxt.companyOpen ? (
					<motion.div
						initial={{ y: 200, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}>
						<UserList />
					</motion.div>
				) : (
					<div className={classes.holder}>
						<Typography>Please Select a company to get Started!</Typography>
					</div>
				)}
			</Paper>
			<Paper
				elevation={1}
				className={classes.column}
				style={{ flex: '0 1 20%' }}>
				{mailCtxt.userOpen ? (
					<motion.div
						initial={{ y: 200, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}>
						<EmailList />
					</motion.div>
				) : (
					<div className={classes.holder}>
						<Typography>Please Select a user to get started!</Typography>
					</div>
				)}
			</Paper>
			<Paper elevation={1} className={classes.column}>
				{mailCtxt.emailOpen ? (
					<motion.div
						initial={{ y: 200, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}>
						<EmailBody />
					</motion.div>
				) : (
					<div className={classes.holder}>
						<Typography>Please Select an email to view here!</Typography>
					</div>
				)}
			</Paper>
		</div>
	);
};

export default withStyles(styles)(Index);
