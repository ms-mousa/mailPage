import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import MailContext from './MailContext';

const styles = theme => ({
	root: {
		position: 'relative',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	tag: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '50%',
		padding: '5px',
		fontSize: '12px',
		fontWeight: 200,
		letterSpacing: '1px',
		fontFamily: 'Roboto',
		color: 'white',
		background: theme.palette.primary.main,
		borderRadius: '5px',
		marginRight: '0.5rem',
	},
	tagSec: {
		background: theme.palette.secondary.main,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '50%',
		padding: '5px',
		fontSize: '12px',
		letterSpacing: '1px',
		fontFamily: 'Roboto',
		color: 'white',
		borderRadius: '5px',
		marginRight: '0.5rem',
	},
	tagCon: {
		display: 'flex',
		justifyContent: 'flex-end',
		width: '50%',
		alignSelf: 'flex-end',
		justifySelf: 'flex-start',
	},
	company: {
		paddingLeft: '0.25rem',
		flexBasis: '50%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	companyDesc: {
		fontSize: '14px',
		color: theme.palette.text.secondary,
	},
});

const UserList = ({ classes }) => {
	const [panelState, setPanelState] = useState('null');
	const { mailCtxt, setMailCtxt } = useContext(MailContext);

	const handleChange = panel => (event, expanded) => {
		setPanelState({
			expanded: expanded ? panel : false,
		});
		setMailCtxt({ ...mailCtxt, userOpen: true });
	};

	useEffect(() => {
		if (panelState.expanded === false) {
			setMailCtxt({
				...mailCtxt,
				userOpen: false,
				emailOpen: false,
			});
		}
	}, [panelState]);

	return (
		<div className={classes.root}>
			<div
				style={{
					position: 'sticky',
					top: 0,
					zIndex: 100,
					background: '#eee',
				}}>
				<Typography
					style={{
						fontSize: '20px',
						color: 'Black',
						paddingTop: '12px',
						fontWeight: 300,
						textAlign: 'center',
						marginBottom: '12px',
					}}>
					User List
				</Typography>
				<Divider style={{ marginBottom: '0.5rem' }} />
			</div>
			{Array(3)
				.fill('')
				.map((_, i) => {
					return (
						<ExpansionPanel
							key={(i + 1) * 5}
							expanded={panelState.expanded === `panel${i + 1}`}
							onChange={handleChange(`panel${i + 1}`)}>
							<ExpansionPanelSummary
								style={{ padding: '12px' }}
								expandIcon={<ExpandMoreIcon />}>
								<Avatar alt='User Image' src='./man.png' />
								<div className={classes.company}>
									<Typography className={classes.heading}>
										John <span style={{ fontWeight: 500 }}>Doe</span>
									</Typography>
									<Typography className={classes.secondaryHeading}>
										Head Of Sales
									</Typography>
								</div>
								<div className={classes.tagCon}>
									<div className={classes.tag}>POC</div>
								</div>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails
								style={{
									paddingBottom: '0.75rem',
								}}>
								<Typography className={classes.companyDesc}>
									- Ex aliqua sunt proident pariatur. <br />
									- Esse ullamco occaecat aute exercitation cillum qui. <br />-
									Open tickets: 4
								</Typography>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					);
				})}
			{Array(10)
				.fill('')
				.map((_, i) => {
					return (
						<ExpansionPanel
							key={(i + 1) * 4}
							expanded={panelState.expanded === `panel${i + 4}`}
							onChange={handleChange(`panel${i + 4}`)}>
							<ExpansionPanelSummary
								style={{ padding: '12px' }}
								expandIcon={<ExpandMoreIcon />}>
								<Avatar alt='User Image' src='./woman.png' />
								<div className={classes.company}>
									<Typography className={classes.heading}>
										Helen <span style={{ fontWeight: 500 }}>Doe</span>
									</Typography>
									<Typography className={classes.secondaryHeading}>
										Head Of HR
									</Typography>
								</div>
								<div className={classes.tagCon}>
									<div className={classes.tag}>POC</div>
									<div className={classes.tagSec}>HH</div>
								</div>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails
								style={{
									paddingBottom: '0.75rem',
								}}>
								<Typography className={classes.companyDesc}>
									- Ex aliqua sunt proident pariatur. <br />
									- Esse ullamco occaecat aute exercitation cillum qui. <br />-
									Open tickets: 4
								</Typography>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					);
				})}
		</div>
	);
};

UserList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserList);
