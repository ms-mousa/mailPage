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
	content: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
		maxHeight: '40px',
		position: 'relative',
		overflow: 'hidden',
	},
	subject: {
		paddingLeft: '0.25rem',
		flexBasis: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
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
		width: '10%',
		alignSelf: 'flex-end',
		justifySelf: 'flex-start',
		zIndex: 80,
	},
	companyDesc: {
		fontSize: '14px',
		color: theme.palette.text.secondary,
	},
});

const EmailList = ({ classes }) => {
	const [panelState, setPanelState] = useState('');
	const { mailCtxt, setMailCtxt } = useContext(MailContext);

	const handleChange = panel => (event, expanded) => {
		setPanelState({
			expanded: expanded ? panel : false,
		});
	};
	const handleClick = (i, e) => {
		setMailCtxt({
			...mailCtxt,
			mailIndexOpen: mailCtxt.mailIndexOpen.concat(i),
			emailOpen: true,
		});
	};

	useEffect(() => {
		if (panelState.expanded === false) {
			setMailCtxt({
				...mailCtxt,
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
					Email List
				</Typography>
				<Divider style={{ marginBottom: '0.5rem' }} />
			</div>
			{Array(10)
				.fill('')
				.map((_, i) => {
					// Generating random Read indeces will later be replaced with db model and context knowledge
					// let read =
					// 	(i * (Math.floor(Math.random() * 6) + 1)) % 2 === 1
					// 		? (read = true)
					// 		: (read = false);
					let read = mailCtxt.mailIndexOpen.includes(i) ? true : false;
					return (
						<ExpansionPanel
							key={(i + 1) * 6}
							id={i + 1}
							expanded={panelState.expanded === `panel${i + 1}`}
							onChange={handleChange(`panel${i + 1}`)}
							onClick={handleClick.bind(this, i)}>
							<ExpansionPanelSummary
								style={{
									padding: '12px',
									background: `${read ? '#e0e0e0' : 'white'}`,
								}}
								expandIcon={<ExpandMoreIcon />}>
								<div className={classes.subject}>
									<Typography className={classes.heading}>
										Enquiry about Criminal background check
									</Typography>
									<Typography className={classes.content}>
										Quis duis sint ut minim irure ea et deserunt tempor esse
										reprehenderit qui occaecat Lorem. Reprehenderit eu nulla
										incididunt occaecat minim in. Lorem mollit in et sint
										exercitation aliquip quis. Irure est et minim in esse elit
										elit duis occaecat adipisicing anim adipisicing. Sint velit
										incididunt ut nostrud aliqua minim labore ullamco
										adipisicing laboris do ipsum et ut. Eiusmod sunt adipisicing
										laborum eu occaecat.
									</Typography>

									<span
										style={{
											position: 'absolute',
											bottom: 0,
											left: 0,
											height: '60px',
											width: '100%',
											backgroundImage: `linear-gradient(to top, ${
												read ? '#e0e0e0' : 'white'
											} 60%, transparent )`,
										}}></span>
								</div>
								<div className={classes.tagCon}>
									<div className={classes.tag}>Att</div>
									<div className={classes.tagSec}>OB</div>
								</div>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails
								style={{
									paddingBottom: '0.75rem',
									background: `${read ? '#e0e0e0' : 'white'}`,
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

EmailList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmailList);
