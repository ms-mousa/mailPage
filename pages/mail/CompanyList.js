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

const CompanyList = ({ classes }) => {
	const [panelState, setPanelState] = useState('null');
	const { mailCtxt, setMailCtxt } = useContext(MailContext);

	const handleChange = panel => (event, expanded) => {
		setPanelState({
			expanded: expanded ? panel : false,
		});
		setMailCtxt({
			...mailCtxt,
			companyOpen: true,
		});
	};

	useEffect(() => {
		if (panelState.expanded === false) {
			setMailCtxt({
				...mailCtxt,
				companyOpen: false,
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
					Company list
				</Typography>
				<Divider style={{ marginBottom: '0.5rem' }} />
			</div>
			{Array(5)
				.fill('')
				.map((_, i) => {
					return (
						<ExpansionPanel
							key={(i + 1) * 2}
							expanded={panelState.expanded === `panel${i + 1}`}
							onChange={handleChange(`panel${i + 1}`)}>
							<ExpansionPanelSummary
								style={{ padding: '12px' }}
								expandIcon={<ExpandMoreIcon />}>
								<Avatar
									alt='Intel Logo'
									src='https://i.pinimg.com/originals/eb/1e/ac/eb1eacd6c4c846b53c9b2fc508bc0fab.png'
								/>
								<div className={classes.company}>
									<Typography className={classes.heading}>Apple</Typography>
									<Typography className={classes.secondaryHeading}>
										Uses both products
									</Typography>
								</div>
								<div className={classes.tagCon}>
									<div className={classes.tag}>New</div>
									<div className={classes.tagSec}>Active</div>
								</div>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails style={{ paddingBottom: '0.75rem' }}>
								<Typography className={classes.companyDesc}>
									- Has 4 open tickets <br />
									- Daily users: 800 <br />- Open tickets: 4
								</Typography>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					);
				})}
			{Array(6)
				.fill('')
				.map((_, i) => {
					return (
						<ExpansionPanel
							key={(i + 1) * 3}
							expanded={panelState.expanded === `panel${i + 1}`}
							onChange={handleChange(`panel${i + 1}`)}>
							<ExpansionPanelSummary
								style={{ padding: '12px' }}
								expandIcon={<ExpandMoreIcon />}>
								<Avatar
									alt='Sophos Logo'
									src='https://pbs.twimg.com/profile_images/1153739750114594816/SF-VpWf0_400x400.jpg'
								/>
								<div className={classes.company}>
									<Typography className={classes.heading}>Sophos</Typography>
									<Typography className={classes.secondaryHeading}>
										Uses both products
									</Typography>
								</div>
								<div className={classes.tagCon}>
									<div className={classes.tag}>New</div>
								</div>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails style={{ paddingBottom: '0.75rem' }}>
								<Typography className={classes.companyDesc}>
									- Uses OnBoard <br />
									- Daily users: 200 <br />- Open tickets: 2
								</Typography>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					);
				})}
			<ExpansionPanel
				expanded={panelState.expanded === 'panel3'}
				onChange={handleChange('panel3')}>
				<ExpansionPanelSummary
					style={{ padding: '12px' }}
					expandIcon={<ExpandMoreIcon />}>
					<Avatar
						alt='Microsoft Logo'
						src='https://agsol.com/wp-content/uploads/2018/09/new-microsoft-logo-SIZED-SQUARE.jpg'
					/>
					<div className={classes.company}>
						<Typography className={classes.heading}>Microsoft</Typography>
						<Typography className={classes.secondaryHeading}>
							Uses both products
						</Typography>
					</div>
					<div className={classes.tagCon}>
						<div className={classes.tag}>IT</div>
					</div>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails style={{ paddingBottom: '0.75rem' }}>
					<Typography className={classes.companyDesc}>
						- Uses OnBoard <br />
						- Daily users: 10 <br />- Open tickets: 8
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
};

CompanyList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompanyList);
